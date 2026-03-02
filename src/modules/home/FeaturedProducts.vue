<template>
    <section class="featured-products section">
        <div class="featured-products__container">
            <div class="section-header">
                <h2 class="section-title">🔥 Sản Phẩm Nổi Bật</h2>
                <a href="#" class="section-link">
                    Xem tất cả
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </a>
            </div>

            <div class="featured-products__grid">
                <div v-for="(product, index) in products" :key="product.id" class="product-card animate-fade-in-up"
                    :class="`delay-${index + 1}`">
                    <!-- Image -->
                    <div class="product-card__image-wrapper">
                        <img :src="product.image" :alt="product.name" class="product-card__image" />
                        <AppBadge v-if="product.badge" :variant="badgeVariant(product.badge)"
                            class="product-card__badge">
                            {{ product.badge }}
                        </AppBadge>
                        <div v-if="product.discount" class="product-card__discount">
                            -{{ product.discount }}%
                        </div>
                    </div>

                    <!-- Info -->
                    <div class="product-card__info">
                        <div class="product-card__meta">
                            <span class="product-card__category">{{ product.categoryName }}</span>
                            <span v-if="product.provider" class="product-card__provider">bởi {{ product.provider
                                }}</span>
                        </div>
                        <h4 class="product-card__name">{{ product.name }}</h4>
                        <p class="product-card__desc">{{ product.description }}</p>

                        <div class="product-card__stats">
                            <div v-if="product.rating" class="product-card__rating">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFD600" stroke="#FFD600"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon
                                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <span>{{ product.rating }}</span>
                            </div>
                            <div class="product-card__stats-divider" v-if="product.rating && product.soldCount"></div>
                            <span v-if="product.soldCount" class="product-card__sold">Đã bán {{ (product.soldCount /
                                1000).toFixed(1).replace('.0', '') }}k</span>
                        </div>

                        <div class="product-card__footer">
                            <div class="product-card__pricing">
                                <span class="product-card__price">{{ formatPrice(product.price) }}</span>
                                <span v-if="product.originalPrice" class="product-card__original">
                                    {{ formatPrice(product.originalPrice) }}
                                </span>
                            </div>
                            <AppButton variant="secondary" size="sm">
                                Mua ngay
                            </AppButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Product } from '@/types'
import AppBadge from '@/components/base/Badge/AppBadge.vue'
import AppButton from '@/components/base/Button/AppButton.vue'

function formatPrice(price: number): string {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)
}

function badgeVariant(badge: string) {
    const map: Record<string, 'accent' | 'danger' | 'success' | 'primary'> = {
        HOT: 'accent',
        SALE: 'danger',
        NEW: 'success',
        BEST: 'primary',
    }
    return map[badge] || 'primary'
}

const products: Product[] = [
    {
        id: 1,
        name: 'Netflix Premium 1 Tháng',
        slug: 'netflix-premium-1-thang',
        description: 'Tài khoản Premium 4K, xem trên 4 thiết bị cùng lúc',
        price: 59000,
        originalPrice: 120000,
        image: 'https://placehold.co/400x300/1A1A2E/6C5CE7?text=Netflix+Premium',
        categoryId: 1,
        categoryName: 'Streaming',
        badge: 'HOT',
        discount: 50,
        rating: 4.8,
        soldCount: 1234,
        provider: 'Netflix Inc',
        inStock: true,
    },
    {
        id: 2,
        name: 'Spotify Premium 12 Tháng',
        slug: 'spotify-premium-12-thang',
        description: 'Nghe nhạc không quảng cáo, chất lượng cao, tải offline',
        price: 149000,
        originalPrice: 249000,
        image: 'https://placehold.co/400x300/1A1A2E/00CECE?text=Spotify+Premium',
        categoryId: 1,
        categoryName: 'Streaming',
        badge: 'SALE',
        discount: 40,
        rating: 4.9,
        soldCount: 856,
        provider: 'Spotify AB',
        inStock: true,
    },
    {
        id: 3,
        name: 'TikTok Premium 6 Tháng',
        slug: 'tiktok-premium-6-thang',
        description: 'Xem không quảng cáo, tải video, trải nghiệm độc quyền',
        price: 89000,
        image: 'https://placehold.co/400x300/1A1A2E/FD79A8?text=TikTok+Premium',
        categoryId: 2,
        categoryName: 'Mạng xã hội',
        badge: 'NEW',
        rating: 4.5,
        soldCount: 432,
        provider: 'ByteDance',
        inStock: true,
    },
    {
        id: 4,
        name: 'YouTube Premium 3 Tháng',
        slug: 'youtube-premium-3-thang',
        description: 'Xem video không quảng cáo, phát nền, tải video',
        price: 79000,
        originalPrice: 99000,
        image: 'https://placehold.co/400x300/1A1A2E/FF5252?text=YouTube+Premium',
        categoryId: 1,
        categoryName: 'Streaming',
        badge: 'BEST',
        discount: 20,
        rating: 4.9,
        soldCount: 678,
        provider: 'Google LLC',
        inStock: true,
    },
    {
        id: 5,
        name: 'Canva Pro 1 Năm',
        slug: 'canva-pro-1-nam',
        description: 'Công cụ thiết kế chuyên nghiệp, kho template không giới hạn',
        price: 199000,
        originalPrice: 350000,
        image: 'https://placehold.co/400x300/1A1A2E/00CECE?text=Canva+Pro',
        categoryId: 4,
        categoryName: 'Công cụ & Phần mềm',
        badge: 'SALE',
        discount: 43,
        rating: 4.7,
        soldCount: 321,
        provider: 'Canva Pty Ltd',
        inStock: true,
    },
    {
        id: 6,
        name: 'Discord Nitro 3 Tháng',
        slug: 'discord-nitro-3-thang',
        description: 'Emoji tùy chỉnh, stream HD, tải file 100MB, server boost',
        price: 69000,
        image: 'https://placehold.co/400x300/1A1A2E/6C5CE7?text=Discord+Nitro',
        categoryId: 5,
        categoryName: 'Gaming',
        badge: 'HOT',
        rating: 4.6,
        soldCount: 543,
        provider: 'Discord Inc',
        inStock: true,
    },
    {
        id: 7,
        name: 'Office 365 Family 1 Năm',
        slug: 'office-365-family',
        description: 'Bộ Office đầy đủ cho 6 người, 1TB OneDrive mỗi người',
        price: 299000,
        originalPrice: 450000,
        image: 'https://placehold.co/400x300/1A1A2E/2196F3?text=Office+365',
        categoryId: 4,
        categoryName: 'Công cụ & Phần mềm',
        badge: 'BEST',
        discount: 33,
        rating: 5.0,
        soldCount: 912,
        provider: 'Microsoft Corp',
        inStock: true,
    },
    {
        id: 8,
        name: 'Duolingo Plus 6 Tháng',
        slug: 'duolingo-plus-6-thang',
        description: 'Học ngoại ngữ không quảng cáo, luyện tập không giới hạn',
        price: 119000,
        originalPrice: 180000,
        image: 'https://placehold.co/400x300/1A1A2E/00E676?text=Duolingo+Plus',
        categoryId: 6,
        categoryName: 'Giáo dục',
        badge: 'NEW',
        discount: 34,
        rating: 4.8,
        soldCount: 267,
        provider: 'Duolingo Inc',
        inStock: true,
    },
]
</script>

<style scoped lang="scss">
.featured-products {
    &__container {
        padding: 0 $space-lg;

        @include respond-to('lg') {
            padding: 0 $space-md;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: $space-md;

        @include respond-to('xl') {
            grid-template-columns: repeat(3, 1fr);
        }

        @include respond-to('md') {
            grid-template-columns: repeat(2, 1fr);
        }

        @include respond-to('sm') {
            grid-template-columns: 1fr;
        }
    }
}

.product-card {
    @include card-base;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        border-color: $border-light;
        transform: translateY(-4px);
        box-shadow: $shadow-lg;

        .product-card__image {
            transform: scale(1.08);
        }
    }

    &__image-wrapper {
        position: relative;
        aspect-ratio: 4/3;
        width: 100%;
        overflow: hidden;
        background-color: $bg-sidebar;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform $transition-slow;
    }

    &__badge {
        position: absolute;
        top: $space-sm;
        left: $space-sm;
    }

    &__discount {
        position: absolute;
        top: $space-sm;
        right: $space-sm;
        padding: 3px 8px;
        font-size: 11px;
        font-weight: $fw-bold;
        color: #fff;
        background: $danger;
        border-radius: $radius-sm;
    }

    &__info {
        padding: $space-md;
    }

    &__meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $space-xs;
    }

    &__category {
        display: inline-block;
        font-size: 11px;
        font-weight: $fw-bold;
        color: $primary-light;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    &__provider {
        font-size: 11px;
        color: $text-muted;
    }

    &__name {
        font-family: $font-heading;
        font-size: $fs-base;
        font-weight: $fw-semibold;
        color: $text-primary;
        margin-bottom: $space-xs;
        @include truncate(1);
    }

    &__desc {
        font-size: $fs-xs;
        color: $text-muted;
        margin-bottom: $space-sm;
        @include truncate(2);
    }

    &__stats {
        display: flex;
        align-items: center;
        gap: $space-sm;
        margin-bottom: $space-md;
        font-size: 12px;
        color: $text-secondary;
    }

    &__rating {
        display: flex;
        align-items: center;
        gap: 4px;
        color: #FFD600;
        font-weight: $fw-semibold;
    }

    &__stats-divider {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background: $text-muted;
    }

    &__sold {
        font-size: 11px;
    }

    &__footer {
        @include flex-between;
        gap: $space-sm;
    }

    &__pricing {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    &__price {
        font-family: $font-heading;
        font-size: $fs-md;
        font-weight: $fw-bold;
        color: $secondary;
    }

    &__original {
        font-size: $fs-xs;
        color: $text-muted;
        text-decoration: line-through;
    }
}
</style>
