<template>
    <div class="not-found">
        <div class="not-found__content animate-fade-in-up">
            <div class="not-found__error-code">404</div>
            <h1 class="not-found__title">Trang không tồn tại</h1>
            <p class="not-found__desc">
                Rất tiếc, trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc tạm thời không thể truy cập.
            </p>

            <div class="not-found__actions">
                <AppButton variant="primary" size="lg" @click="$router.push('/')">
                    <template #icon>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </template>
                    Về Trang Chủ
                </AppButton>
            </div>
        </div>

        <!-- Background decorative elements -->
        <div class="not-found__bg-elements">
            <div class="not-found__blob not-found__blob--1"></div>
            <div class="not-found__blob not-found__blob--2"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AppButton from '@/components/base/Button/AppButton.vue'
</script>

<style scoped lang="scss">
.not-found {
    position: relative;
    min-height: calc(100vh - $header-height);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: $space-3xl $space-xl;
    overflow: hidden;

    &__content {
        position: relative;
        z-index: 2;
        text-align: center;
        max-width: 600px;
    }

    &__error-code {
        font-family: $font-heading;
        font-size: 150px;
        font-weight: $fw-extrabold;
        line-height: 1;
        margin-bottom: $space-sm;
        background: linear-gradient(135deg, $primary 0%, $secondary 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 10px 30px rgba($primary, 0.3);

        @include respond-to('md') {
            font-size: 100px;
        }

        @include respond-to('sm') {
            font-size: 80px;
        }
    }

    &__title {
        font-family: $font-heading;
        font-size: $fs-3xl;
        font-weight: $fw-bold;
        color: $text-primary;
        margin-bottom: $space-md;

        @include respond-to('sm') {
            font-size: $fs-2xl;
        }
    }

    &__desc {
        font-size: $fs-lg;
        color: $text-secondary;
        margin-bottom: $space-2xl;
        line-height: $lh-relaxed;

        @include respond-to('sm') {
            font-size: $fs-base;
        }
    }

    &__actions {
        display: flex;
        justify-content: center;
    }

    // Decorative background blobs
    &__bg-elements {
        position: absolute;
        inset: 0;
        z-index: 1;
        overflow: hidden;
        pointer-events: none;
    }

    &__blob {
        position: absolute;
        border-radius: 50%;
        filter: blur(80px);
        opacity: 0.15;
        z-index: 1;
        animation: float 20s ease-in-out infinite alternate;

        &--1 {
            top: -10%;
            left: 20%;
            width: 400px;
            height: 400px;
            background: $primary;
        }

        &--2 {
            bottom: -10%;
            right: 10%;
            width: 500px;
            height: 500px;
            background: $secondary;
            animation-delay: -5s;
        }
    }
}

@keyframes float {
    0% {
        transform: translate(0, 0) scale(1);
    }

    33% {
        transform: translate(50px, -50px) scale(1.1);
    }

    66% {
        transform: translate(-20px, 20px) scale(0.9);
    }

    100% {
        transform: translate(0, 0) scale(1);
    }
}
</style>
