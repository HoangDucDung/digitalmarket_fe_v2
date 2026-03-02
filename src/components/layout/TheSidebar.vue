<template>
    <aside
        :class="['sidebar', { 'sidebar--open': appStore.sidebarOpen, 'sidebar--collapsed': appStore.sidebarCollapsed }]">

        <!-- Desktop Toggle Button -->
        <button v-if="!appStore.isMobile" class="sidebar__toggle" @click="appStore.toggleSidebarCollapse"
            aria-label="Toggle Sidebar">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round"
                :style="{ transform: appStore.sidebarCollapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>

        <!-- Overlay for mobile -->
        <div class="sidebar__overlay" @click="appStore.closeSidebar"></div>

        <div class="sidebar__inner">
            <!-- Logo -->
            <div class="sidebar__logo">
                <div class="sidebar__logo-icon">
                    <svg viewBox="0 0 32 32" fill="none">
                        <rect width="32" height="32" rx="8" fill="url(#logo-gradient)" />
                        <path d="M10 16L14 20L22 12" stroke="white" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <defs>
                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="32" y2="32">
                                <stop stop-color="#6C5CE7" />
                                <stop offset="1" stop-color="#00CECE" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <span class="sidebar__logo-text">DigiMarket</span>
            </div>

            <!-- Search -->
            <div class="sidebar__search">
                <AppInput v-model="appStore.searchQuery" placeholder="Tìm kiếm sản phẩm..."
                    input-class="sidebar__search-input">
                    <template #icon>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </template>
                </AppInput>
            </div>

            <!-- Navigation -->
            <nav class="sidebar__nav">
                <p class="sidebar__nav-label">MENU</p>
                <ul class="sidebar__nav-list">
                    <li v-for="item in navItems" :key="item.to" class="sidebar__nav-item">
                        <router-link :to="item.to" class="sidebar__nav-link" @click="appStore.closeSidebar">
                            <span class="sidebar__nav-icon" v-html="item.icon"></span>
                            <span>{{ item.label }}</span>
                            <span v-if="item.badge" class="sidebar__nav-badge">{{ item.badge }}</span>
                        </router-link>
                    </li>
                </ul>
            </nav>

            <!-- Categories -->
            <div class="sidebar__categories">
                <p class="sidebar__nav-label">THỂ LOẠI</p>
                <ul class="sidebar__nav-list">
                    <li v-for="cat in categories" :key="cat.name" class="sidebar__nav-item">
                        <a href="#" class="sidebar__nav-link">
                            <span class="sidebar__cat-dot" :style="{ background: cat.color }"></span>
                            <span>{{ cat.name }}</span>
                            <span class="sidebar__cat-count">{{ cat.count }}</span>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Auth Buttons -->
            <div class="sidebar__auth">
                <AppButton variant="primary" block @click="$router.push('/login')">
                    <template #icon>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
                        </svg>
                    </template>
                    Đăng nhập
                </AppButton>
                <AppButton variant="outline" block>
                    Đăng ký
                </AppButton>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/useAppStore'
import AppInput from '@/components/base/input/AppInput.vue'
import AppButton from '@/components/base/Button/AppButton.vue'

const appStore = useAppStore()

const navItems = [
    {
        label: 'Trang chủ',
        to: '/',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    },
    {
        label: 'Tin tức',
        to: '/news',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/></svg>',
        badge: 'Mới',
    },
    {
        label: 'Mẫu Đăng nhập',
        to: '/login-preview',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" /></svg>',
    },
    {
        label: 'Liên hệ',
        to: '/contact',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    },
]

const categories = [
    { name: 'Streaming', color: '#E50914', count: 24 },
    { name: 'Mạng xã hội', color: '#00CECE', count: 18 },
    { name: 'Gaming', color: '#00E676', count: 31 },
    { name: 'Công cụ & Phần mềm', color: '#FFD600', count: 15 },
    { name: 'Giáo dục', color: '#A29BFE', count: 12 },
]
</script>

<style scoped lang="scss">
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: $sidebar-width;
    height: 100vh;
    z-index: $z-sidebar;
    transition: width $transition-base, transform $transition-slow;

    &__toggle {
        position: absolute;
        top: 50%;
        right: -14px;
        width: 28px;
        height: 28px;
        background: $bg-sidebar;
        border: 1px solid $border-color;
        border-radius: 50%;
        @include flex-center;
        cursor: pointer;
        z-index: 10;
        transition: background $transition-fast, color $transition-fast;

        svg {
            width: 16px;
            height: 16px;
        }

        &:hover {
            background: $primary;
            color: white;
            border-color: $primary;
        }
    }

    &--collapsed {
        width: $sidebar-collapsed;

        .sidebar__logo-text,
        .sidebar__search,
        .sidebar__nav-label,
        .sidebar__nav-link span:not(.sidebar__nav-icon),
        .sidebar__nav-badge,
        .sidebar__categories,
        .sidebar__auth {
            display: none;
        }

        .sidebar__inner {
            padding: 16px 6px;
        }

        .sidebar__logo {
            justify-content: center;
            padding-bottom: $space-md;
            margin-bottom: $space-md;
        }

        .sidebar__nav-link {
            justify-content: center;
            padding: 12px 0;
        }

        .sidebar__nav-icon {
            margin: 0;
        }
    }

    @include respond-to('lg') {
        pointer-events: none;

        &--open {
            pointer-events: all;

            .sidebar__overlay {
                opacity: 1;
                pointer-events: all;
            }

            .sidebar__inner {
                transform: translateX(0);
            }
        }
    }

    &__overlay {
        display: none;

        @include respond-to('lg') {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(4px);
            opacity: 0;
            transition: opacity $transition-base;
            pointer-events: none;
            z-index: -1;
        }
    }

    &__inner {
        display: flex;
        flex-direction: column;
        height: 100%;
        background: $bg-sidebar;
        border-right: 1px solid $border-color;
        padding: $space-md;
        overflow-y: auto;
        @include custom-scrollbar;

        @include respond-to('lg') {
            transform: translateX(-100%);
            transition: transform $transition-slow;
        }

        @media screen and (max-width: 1024px) {
            padding: $space-sm;
        }
    }

    &__logo {
        @include flex-center;
        gap: $space-sm;
        margin-bottom: $space-xl;
        padding-bottom: $space-lg;
        border-bottom: 1px solid $border-color;

        &-icon {
            width: 36px;
            height: 36px;
            flex-shrink: 0;

            svg {
                width: 100%;
                height: 100%;
            }
        }

        &-text {
            font-family: $font-heading;
            font-size: $fs-lg;
            font-weight: $fw-bold;
            @include gradient-text;
        }
    }

    &__search {
        margin-bottom: $space-lg;
    }

    &__nav {
        margin-bottom: $space-lg;

        &-label {
            font-size: 11px;
            font-weight: $fw-semibold;
            color: $text-muted;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: $space-sm;
            padding-left: $space-sm;
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        &-link {
            display: flex;
            align-items: center;
            gap: $space-sm;
            padding: 10px $space-sm;
            border-radius: $radius-sm;
            color: $text-secondary;
            font-size: $fs-sm;
            font-weight: $fw-medium;
            transition: all $transition-fast;
            text-decoration: none;

            &:hover,
            &.router-link-exact-active {
                background: $bg-glass-hover;
                color: $text-primary;
            }

            &.router-link-exact-active {
                color: $primary-light;
                background: rgba($primary, 0.1);
            }
        }

        &-icon {
            @include flex-center;
            width: 20px;
            height: 20px;
            flex-shrink: 0;
            opacity: 0.7;
        }

        &-badge {
            margin-left: auto;
            padding: 2px 8px;
            font-size: 10px;
            font-weight: $fw-bold;
            background: rgba($accent, 0.2);
            color: $accent;
            border-radius: $radius-full;
        }
    }

    &__categories {
        margin-bottom: $space-lg;
        flex: 1;
    }

    &__cat-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        flex-shrink: 0;
    }

    &__cat-count {
        margin-left: auto;
        font-size: $fs-xs;
        color: $text-muted;
    }

    &__auth {
        display: flex;
        flex-direction: column;
        gap: $space-sm;
        padding-top: $space-lg;
        border-top: 1px solid $border-color;
    }
}
</style>
