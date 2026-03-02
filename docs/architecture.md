# Hướng Dẫn Thiết Kế & Kiến Trúc Component (DigitalMarket V2)

Tài liệu này tổng hợp toàn bộ quy chuẩn thiết kế (Design System) và kiến trúc tổ chức source code của dự án Digital Marketplace V2 dành cho Frontend.

---

## 1. Ngôn Ngữ Thiết Kế: "Digital Neon"

Dự án sử dụng ngôn ngữ thiết kế **Digital Neon**, hướng đến trải nghiệm cao cấp (Premium), hiện đại và đậm chất công nghệ (Tech-forward).

### 1.1. Bảng Màu Chủ Đạo (Color Palette)

Bảng màu được thiết kế tối ưu cho Dark Mode, kết hợp với các hiệu ứng phát sáng (Neon Glow) để làm nổi bật các thành phần quan trọng.

| Tên                       | Giá Trị (Hex) | Ý nghĩa / Ứng dụng                                                                           |
| :------------------------ | :------------ | :------------------------------------------------------------------------------------------- |
| **Nền Chính**             | `#0F0F1A`     | Màu nền tối sâu, tạo không gian vô cực cho website.                                          |
| **Nền Card**              | `#1A1A2E`     | Màu nền cho các thẻ (Product Card, Sidebar), sáng màu hơn nền chính tạo chiều sâu.           |
| **Tím Neon (Primary)**    | `#6C5CE7`     | Màu nhận diện thương hiệu. Dùng cho background gradient, text highlight, hover effect.       |
| **Cyan Neon (Secondary)** | `#00CECE`     | Màu nhấn cực mạnh. Tập trung vào các Call-to-Action quan trọng như nút "Mua ngay", giá tiền. |
| **Hồng Neon (Accent)**    | `#FD79A8`     | Màu nhấn phụ. Thường được sử dụng cho các huy hiệu (Badge) như HOT, SALE.                    |

### 1.2. Typography

Dự án sử dụng 2 bộ font từ Google Fonts để tạo sự tương phản giữa tiêu đề và nội dung:

- **Heading Font:** `Outfit` - Thể hiện sự mạnh mẽ, hiện đại, tròn trịa (ứng dụng cho Logo, Tên sản phẩm, Tiêu đề Section).
- **Body Font:** `Inter` - Tối ưu cho khả năng đọc, trung tính và gọn gàng (ứng dụng cho Đoạn văn, mô tả, text nhỏ).

### 1.3. Hiệu Ứng (Effects & Micro-Animations)

- **Glassmorphism:** Sử dụng nền trong suốt kết hợp với `backdrop-filter: blur(12px)` và viền sáng mỏng (opacity 10-15%) cho các panel trôi nổi (Sidebar header, thẻ tag).
- **Neon Glow:** Các nút bấm chính hoặc card khi hover sẽ phát ra ánh sáng mờ xung quanh (`box-shadow` với màu Primary/Secondary/Accent cường độ nhẹ).
- **Hover Lift:** Khi di chuột vào các thẻ sản phẩm hoặc danh mục, thẻ sẽ mượt mà nhích lên trên (`translateY(-4px)`) kết hợp với đổ bóng sâu hơn.

---

## 2. Kiến Trúc Source Code & Quản Lý Style

Source code được thiết kế theo mô hình **Component-Driven Development**, phân tách rạch ròi giữa UI, Logic nội bộ và Global Style.

### 2.1. Cấu Trúc CSS / SCSS

Toàn bộ CSS được quản lý trong thư mục `src/assets/styles/`, đóng vai trò là lõi của Design System:

1.  **`_variable.scss`**: Nơi biến đổi Design System thành Code. Chứa 100% các biến SCSS (Colors, Typography, Spacing, Breakpoints, Z-index).
2.  **`_mixins.scss`**: Chứa các "hàm" CSS tái sử dụng như `@mixin glass`, `@mixin flex-center`, `@mixin respond-to(...)`.
3.  **`_animations.scss`**: Định nghĩa các keyframes (`@keyframes fadeInUp`, `pulseGlow`) và utility classes (`.animate-fade-in-up`).
4.  **`main.scss`**: File đầu vào toàn cục, tích hợp các thành phần trên cùng với TailwindCSS và các file reset CSS thông dụng.

_Lưu ý quan trọng:_ `_variable.scss` và `_mixins.scss` được tự động inject vào nội bộ từng thẻ `<style scoped>` của mọi Vue component thông qua cấu hình `vite.config.ts` (thuộc tính `css.preprocessorOptions.scss.additionalData`). Điều này cho phép developer sử dụng biến `$primary` ở bất kỳ component nào mà không cần import lại.

### 2.2. Kiến Trúc Phân Lớp Component

Các component được phân loại chặt chẽ trong `src/components/`, chia làm 3 tầng:

#### Tầng 1: Base Components (Wrapper/Atoms)

- **Thư mục:** `src/components/base/`
- **Đặc điểm:** Bắt đầu bằng tiền tố `App` (Vd: `AppButton`, `AppInput`, `AppCard`, `AppBadge`).
- **Vai trò:** Đây là các component độc lập, không mang business logic. Có nhiệm vụ bọc lại (wrap) các thẻ HTML chuẩn để quy chuẩn hóa giao diện theo Design System. Chúng nhận props (size, variant) và render style tương ứng. Khi cần đổi thư viện UI (như chuyển từ tự code sang PrimeVue, Vuetify), chỉ cần sửa nội bộ Base Component này.

#### Tầng 2: Layout Components (Khung sườn)

- **Thư mục:** `src/components/layout/`
- **Đặc điểm:** Bắt đầu bằng tiền tố `The` (Vd: `TheSidebar`, `TheHeader`, `TheFooter`, `MainLayout`). Theo chuẩn Vue, chữ `The` ám chỉ component này chỉ xuất hiện 1 lần duy nhất trên mỗi trang.
- **Vai trò:** Lắp ráp khung sườn tổng thể của ứng dụng, quản lý responsive layout (giấu Sidebar trên mobile, hiện Header).

#### Tầng 3: Feature/Page Components (Nghiệp vụ)

- **Thư mục:** `src/components/home/` (hoặc các tính năng khác).
- **Đặc điểm:** Tên theo chức năng cụ thể (Vd: `HeroSlider`, `FeaturedProducts`).
- **Vai trò:** Nơi kết hợp Base Components và gọi dữ liệu, nhận state từ Pinia thả vào giao diện.

### 2.3. Quản Lý Trạng Thái & Dữ Liệu

1.  **State Management (Pinia):** Thư mục `src/stores/`. Chứa các store toàn cục (Global state) như `useAppStore` để điều khiển Sidebar toggle (được chia sẻ giữa `TheHeader` và `TheSidebar`), trạng thái màn hình Mobile/Desktop, và bộ lọc tìm kiếm.
2.  **API Services (Axios):** Thư mục `src/services/`. File `api.ts` xuất bản một instance của Axios đã được đính kèm các Interceptor để tự động nhúng Access Token vào request header, và tự động xử lý lỗi 401 (Logout) khi Token hết hạn.
3.  **Types (TypeScript):** Thư mục `src/types/`. Định nghĩa rõ ràng cấu trúc dữ liệu (`Product`, `Category`, `NewsArticle`) giúp tăng cường độ an toàn của code (Type Safety) và hỗ trợ tự động gợi ý code (Intellisense) trong các component.

### 2.4. Cấu Trúc Thư Mục Thu Thực Tế (src)

```text
src
|   App.vue
|   main.ts
|
+---assets
|   |   vue.svg
|   |
|   \---styles
|           main.scss
|           _animations.scss
|           _mixins.scss
|           _variable.scss
|
+---components
|   +---base
|   |   +---Badge
|   |   |       AppBadge.vue
|   |   |
|   |   +---Button
|   |   |       AppButton.vue
|   |   |
|   |   +---Card
|   |   |       AppCard.vue
|   |   |
|   |   \---input
|   |           AppInput.vue
|   |
|   \---layout
|           MainLayout.vue
|           TheFooter.vue
|           TheHeader.vue
|           TheSidebar.vue
|
+---modules
|   \---home
|           FeaturedNews.vue
|           FeaturedProducts.vue
|           FeatureTags.vue
|           HeroSlider.vue
|           ProductCategories.vue
|
+---pages
|       HomePage.vue
|
+---router
|       index.ts
|
+---services
|       api.ts
|
+---stores
|       useAppStore.ts
|
\---types
        index.ts
        swiper.d.ts
```
