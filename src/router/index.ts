import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
    meta: { title: "DigiMarket — Sàn sản phẩm số hàng đầu" },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/LoginPage.vue"),
    meta: { title: "Đăng nhập", layout: "auth" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/layout/NotFoundPage.vue"),
    meta: { title: "404 - Không tìm thấy trang", layout: "not-found" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // /digitalmarket_fe_v2/ cấu hình ở vite.config.ts
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0, behavior: "smooth" };
  },
});

router.beforeEach((to, _from, next) => {
  const title = (to.meta.title as string) || "DigiMarket";
  document.title = title;
  next();
});

export default router;
