<template>
    <section class="feature-tags">
        <div class="feature-tags__grid">
            <div v-for="(tag, index) in tags" :key="tag.id" class="feature-tags__item animate-fade-in-up"
                :class="`delay-${index + 1}`">
                <div class="feature-tags__icon" v-html="tag.icon"></div>
                <div class="feature-tags__info">
                    <h4 class="feature-tags__title">{{ tag.title }}</h4>
                    <p class="feature-tags__desc">{{ tag.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { FeatureTag } from '@/types'

const tags: FeatureTag[] = [
    {
        id: 1,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
        title: 'Giao hàng nhanh',
        description: 'Nhận sản phẩm tức thì qua email',
    },
    {
        id: 2,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        title: 'Hỗ trợ 24/7',
        description: 'Tư vấn & hỗ trợ mọi lúc',
    },
    {
        id: 3,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
        title: 'Mã giảm giá',
        description: 'Ưu đãi mới mỗi ngày',
    },
    {
        id: 4,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg>',
        title: 'Chính sách hoàn trả',
        description: 'Hoàn tiền 100% nếu lỗi',
    },
    {
        id: 5,
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
        title: 'Thanh toán nhanh',
        description: 'Đa dạng phương thức',
    },
]
</script>

<style scoped lang="scss">
.feature-tags {
    padding: $space-lg;

    @include respond-to('lg') {
        padding: $space-md;
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: $space-md;

        @include respond-to('xl') {
            grid-template-columns: repeat(3, 1fr);
        }

        @include respond-to('md') {
            grid-template-columns: repeat(2, 1fr);
        }

        @include respond-to('sm') {
            grid-template-columns: 1fr;
            gap: $space-sm;
        }
    }

    &__item {
        @include glass;
        @include flex-center;
        gap: $space-md;
        padding: $space-lg;
        border-radius: $radius-md;
        transition: all $transition-base;
        justify-content: flex-start;

        &:hover {
            background: $bg-glass-hover;
            border-color: $border-light;
            transform: translateY(-2px);

            .feature-tags__icon {
                color: $secondary;
                box-shadow: $shadow-glow-secondary;
            }
        }
    }

    &__icon {
        @include flex-center;
        width: 48px;
        height: 48px;
        background: rgba($primary, 0.15);
        color: $primary-light;
        border-radius: $radius-md;
        flex-shrink: 0;
        transition: all $transition-base;
    }

    &__info {
        min-width: 0;
    }

    &__title {
        font-family: $font-heading;
        font-size: $fs-sm;
        font-weight: $fw-semibold;
        color: $text-primary;
        margin-bottom: 2px;
    }

    &__desc {
        font-size: $fs-xs;
        color: $text-muted;
    }
}
</style>
