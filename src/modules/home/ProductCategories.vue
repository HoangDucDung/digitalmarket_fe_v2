<template>
    <section class="product-categories section">
        <div class="product-categories__container">
            <div class="section-header">
                <h2 class="section-title">Danh Mục Sản Phẩm</h2>
                <a href="#" class="section-link">
                    Xem tất cả
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </a>
            </div>

            <div class="product-categories__grid">
                <div v-for="(cat, index) in categories" :key="cat.id"
                    class="product-categories__item animate-fade-in-up" :class="`delay-${index + 1}`"
                    :style="{ '--cat-color': cat.color }">
                    <div class="product-categories__icon">
                        <span v-html="cat.icon"></span>
                    </div>
                    <h4 class="product-categories__name">{{ cat.name }}</h4>
                    <span class="product-categories__count">{{ cat.productCount }} sản phẩm</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Category } from '@/types'

const categories: Category[] = [
    {
        id: 1,
        name: 'Netflix',
        slug: 'netflix',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M5.398 0v24l6.63-7.607L18.602 24V0H5.398zM7.083 1.56h3.477v14.734l-3.477 3.987V1.56zm9.834 16.72l-3.477-3.988V1.56h3.477v16.72z"/></svg>',
        color: '#E50914',
        productCount: 24,
    },
    {
        id: 2,
        name: 'Spotify',
        slug: 'spotify',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>',
        color: '#1DB954',
        productCount: 18,
    },
    {
        id: 3,
        name: 'TikTok',
        slug: 'tiktok',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.81.11v-3.51a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.14a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.57z"/></svg>',
        color: '#00F2EA',
        productCount: 15,
    },
    {
        id: 4,
        name: 'YouTube',
        slug: 'youtube',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0F0F1A"/></svg>',
        color: '#FF0000',
        productCount: 20,
    },
    {
        id: 5,
        name: 'Gaming',
        slug: 'gaming',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="11" x2="10" y2="11"/><line x1="8" y1="9" x2="8" y2="13"/><line x1="15" y1="12" x2="15.01" y2="12"/><line x1="18" y1="10" x2="18.01" y2="10"/><path d="M17.32 5H6.68a4 4 0 00-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 019.828 16h4.344a2 2 0 011.414.586L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.544-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0017.32 5z"/></svg>',
        color: '#00E676',
        productCount: 31,
    },
    {
        id: 6,
        name: 'Office 365',
        slug: 'office',
        icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M21.53 4.306v15.363q0 .807-.472 1.433-.472.627-1.253.85l-6.888 1.974q-.136.037-.29.055-.156.019-.293.019-.396 0-.72-.105-.321-.106-.656-.292l-4.505-2.544q-.248-.137-.391-.366-.143-.23-.143-.515 0-.434.304-.738.304-.305.739-.305h5.831V4.964l-4.38 1.563q-.533.187-.856.658-.322.472-.322 1.03v8.078q0 .496-.248.912-.25.416-.683.651l-2.072 1.13q-.286.148-.452.148-.222 0-.303-.17-.081-.17-.081-.479V7.167q0-.559.25-1.022.249-.463.694-.72L13.78 2.06q.19-.108.399-.166.21-.058.441-.058.148 0 .36.039.213.038.348.089l5.17 1.737q.62.208 1.026.773.405.564.405 1.28v-.449z"/></svg>',
        color: '#D83B01',
        productCount: 12,
    },
]
</script>

<style scoped lang="scss">
.product-categories {
    &__container {
        padding: 0 $space-lg;

        @include respond-to('lg') {
            padding: 0 $space-md;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: $space-md;

        @include respond-to('xl') {
            grid-template-columns: repeat(3, 1fr);
        }

        @include respond-to('md') {
            grid-template-columns: repeat(2, 1fr);
        }

        @include respond-to('sm') {
            grid-template-columns: repeat(2, 1fr);
            gap: $space-sm;
        }
    }

    &__item {
        @include card-base;
        @include flex-center;
        flex-direction: column;
        gap: $space-sm;
        padding: $space-xl $space-md;
        cursor: pointer;
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 3px;
            background: var(--cat-color);
            opacity: 0;
            transition: opacity $transition-base;
        }

        &:hover {
            background: $bg-card-hover;
            border-color: rgba(var(--cat-color), 0.3);
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);

            &::before {
                opacity: 1;
            }

            .product-categories__icon {
                transform: scale(1.1);
                color: var(--cat-color);
            }
        }
    }

    &__icon {
        @include flex-center;
        width: 56px;
        height: 56px;
        background: $bg-glass;
        border-radius: $radius-lg;
        color: $text-secondary;
        transition: all $transition-base;
    }

    &__name {
        font-family: $font-heading;
        font-size: $fs-sm;
        font-weight: $fw-semibold;
        color: $text-primary;
    }

    &__count {
        font-size: $fs-xs;
        color: $text-muted;
    }
}
</style>
