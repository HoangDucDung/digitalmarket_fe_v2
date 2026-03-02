<template>
    <section class="hero-slider">
        <swiper :modules="[Autoplay, Pagination, EffectFade]" :slides-per-view="1"
            :autoplay="{ delay: 5000, disableOnInteraction: false }" :pagination="{ clickable: true }" :effect="'fade'"
            :loop="true" class="hero-slider__swiper">
            <swiper-slide v-for="slide in slides" :key="slide.id" class="hero-slider__slide">
                <div class="hero-slider__bg" :style="{ backgroundImage: `url(${slide.image})` }"></div>
                <div class="hero-slider__gradient"></div>
                <div class="hero-slider__content">
                    <span class="hero-slider__subtitle">{{ slide.subtitle }}</span>
                    <h1 class="hero-slider__title">{{ slide.title }}</h1>
                    <p class="hero-slider__desc">{{ slide.description }}</p>
                    <AppButton variant="secondary" size="lg">
                        {{ slide.buttonText }}
                        <template #icon>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </template>
                    </AppButton>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import AppButton from '@/components/base/Button/AppButton.vue'
import type { SliderItem } from '@/types'

const slides: SliderItem[] = [
    {
        id: 1,
        title: 'Netflix Premium Giảm 50%',
        subtitle: '🔥 Flash Sale Hôm Nay',
        description: 'Trải nghiệm hàng ngàn bộ phim, series và anime chất lượng 4K HDR. Chia sẻ tài khoản lên đến 4 thiết bị.',
        image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8d7e28?w=1400&h=500&fit=crop',
        buttonText: 'Mua ngay',
        buttonLink: '/products/netflix',
    },
    {
        id: 2,
        title: 'TikTok Premium Chính Hãng',
        subtitle: '⭐ Sản phẩm Hot',
        description: 'Xem video không quảng cáo, tải video về máy và trải nghiệm nhiều tính năng độc quyền chỉ có trên Premium.',
        image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1400&h=500&fit=crop',
        buttonText: 'Khám phá',
        buttonLink: '/products/tiktok',
    },
    {
        id: 3,
        title: 'Spotify Premium Trọn Đời',
        subtitle: '🎵 Âm nhạc không giới hạn',
        description: 'Nghe nhạc offline, chất lượng cao, không quảng cáo. Hơn 100 triệu bài hát trên toàn thế giới.',
        image: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=1400&h=500&fit=crop',
        buttonText: 'Xem thêm',
        buttonLink: '/products/spotify',
    },
]
</script>

<style scoped lang="scss">
.hero-slider {
    position: relative;
    border-radius: $radius-lg;
    overflow: hidden;
    margin: $space-lg;

    @include respond-to('lg') {
        margin: $space-md;
        border-radius: $radius-md;
    }

    &__swiper {
        height: 420px;

        @include respond-to('md') {
            height: 320px;
        }

        @include respond-to('sm') {
            height: 260px;
        }
    }

    &__slide {
        position: relative;
    }

    &__bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        transform: scale(1.05);
        transition: transform 8s ease;
    }

    // Ken Burns slow zoom on active
    :deep(.swiper-slide-active) .hero-slider__bg {
        transform: scale(1);
    }

    &__gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(90deg,
                rgba($bg-dark, 0.9) 0%,
                rgba($bg-dark, 0.5) 50%,
                transparent 100%);
        z-index: 1;
    }

    &__content {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        padding: $space-2xl $space-3xl;
        max-width: 560px;

        @include respond-to('md') {
            padding: $space-xl;
        }

        @include respond-to('sm') {
            padding: $space-lg;
        }
    }

    &__subtitle {
        display: inline-block;
        font-size: $fs-sm;
        font-weight: $fw-semibold;
        color: $secondary;
        margin-bottom: $space-sm;
        letter-spacing: 0.5px;
    }

    &__title {
        font-family: $font-heading;
        font-size: $fs-3xl;
        font-weight: $fw-extrabold;
        color: $text-primary;
        margin-bottom: $space-md;
        line-height: $lh-tight;

        @include respond-to('md') {
            font-size: $fs-2xl;
        }

        @include respond-to('sm') {
            font-size: $fs-xl;
        }
    }

    &__desc {
        font-size: $fs-base;
        color: $text-secondary;
        margin-bottom: $space-xl;
        line-height: $lh-relaxed;

        @include respond-to('sm') {
            font-size: $fs-sm;
            margin-bottom: $space-md;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }
    }

    // Swiper pagination styling
    :deep(.swiper-pagination) {
        bottom: 20px !important;

        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            transition: all $transition-base;

            &-active {
                width: 28px;
                border-radius: $radius-full;
                background: $secondary;
            }
        }
    }
}
</style>
