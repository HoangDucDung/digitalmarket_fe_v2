<template>
    <header :class="['the-header', { 'the-header--collapsed': appStore.sidebarCollapsed }]">
        <div class="the-header__inner">
            <!-- Mobile hamburger -->
            <div></div>

            <!-- Mobile logo -->
            <div class="the-header__logo">
                <router-link to="/">
                    <span class="the-header__logo-text">DigiMarket</span>
                </router-link>
            </div>

            <!-- Right actions -->
            <div class="the-header__actions">
                <button class="the-header__action-btn" aria-label="Search">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </button>
                <button class="the-header__action-btn the-header__cart-btn" aria-label="Cart">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span class="the-header__cart-count">3</span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore'

const appStore = useAppStore()
</script>

<style scoped lang="scss">
.the-header {
    display: block; // Visible on both Desktop and Mobile
    position: fixed;
    top: 0;
    left: $sidebar-width;
    width: calc(100% - $sidebar-width);
    height: $header-height;
    background: rgba($bg-sidebar, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid $border-color;
    z-index: $z-header;
    transition: left $transition-base, width $transition-base;

    &--collapsed {
        left: $sidebar-collapsed;
        width: calc(100% - $sidebar-collapsed);
    }

    @include respond-to('lg') {
        left: 0 !important;
        width: 100% !important;
    }

    &__inner {
        @include flex-between;
        height: 100%;
        padding: 0 $space-md;
    }

    &__menu-btn {
        @include flex-center;
        width: 40px;
        height: 40px;
        background: $bg-glass;
        border-radius: $radius-sm;
        color: $text-primary;
        transition: background $transition-fast;

        &:hover {
            background: $bg-glass-hover;
        }
    }

    &__logo {
        a {
            text-decoration: none;
        }

        &-text {
            font-family: $font-heading;
            font-size: $fs-lg;
            font-weight: $fw-bold;
            @include gradient-text;
        }
    }

    &__actions {
        display: flex;
        gap: $space-sm;
    }

    &__action-btn {
        @include flex-center;
        width: 40px;
        height: 40px;
        background: transparent;
        border-radius: $radius-sm;
        color: $text-secondary;
        transition: all $transition-fast;

        &:hover {
            background: $bg-glass;
            color: $text-primary;
        }
    }

    &__cart-btn {
        position: relative;
    }

    &__cart-count {
        position: absolute;
        top: 4px;
        right: 4px;
        min-width: 16px;
        height: 16px;
        padding: 0 4px;
        font-size: 10px;
        font-weight: $fw-bold;
        color: #fff;
        background: $accent;
        border-radius: $radius-full;
        @include flex-center;
    }
}
</style>
