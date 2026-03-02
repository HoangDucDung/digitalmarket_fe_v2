<template>
    <footer class="the-footer">
        <div class="the-footer__inner">
            <!-- Brand Column -->
            <div class="the-footer__brand">
                <div class="the-footer__logo">
                    <div class="the-footer__logo-icon">
                        <svg viewBox="0 0 32 32" fill="none">
                            <rect width="32" height="32" rx="8" fill="url(#footer-logo)" />
                            <path d="M10 16L14 20L22 12" stroke="white" stroke-width="2.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="footer-logo" x1="0" y1="0" x2="32" y2="32">
                                    <stop stop-color="#6C5CE7" />
                                    <stop offset="1" stop-color="#00CECE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span class="the-footer__logo-text">DigiMarket</span>
                </div>
                <p class="the-footer__desc">
                    Sàn thương mại điện tử hàng đầu Việt Nam chuyên cung cấp các sản phẩm số chính hãng với giá tốt
                    nhất.
                </p>
                <div class="the-footer__socials">
                    <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank"
                        class="the-footer__social" :aria-label="social.name">
                        <span v-html="social.icon"></span>
                    </a>
                </div>
            </div>

            <!-- Link Columns -->
            <div v-for="section in footerSections" :key="section.title" class="the-footer__col">
                <h4 class="the-footer__col-title">{{ section.title }}</h4>
                <ul class="the-footer__col-list">
                    <li v-for="link in section.links" :key="link.label">
                        <a :href="link.to" class="the-footer__link">{{ link.label }}</a>
                    </li>
                </ul>
            </div>

            <!-- Contact Column -->
            <div class="the-footer__col">
                <h4 class="the-footer__col-title">Liên hệ</h4>
                <div class="the-footer__contact-list">
                    <div class="the-footer__contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>support@digimarket.vn</span>
                    </div>
                    <div class="the-footer__contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>1900 8888</span>
                    </div>
                    <div class="the-footer__contact-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>Quận 7, TP. Hồ Chí Minh</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="the-footer__bottom">
            <p>&copy; {{ currentYear }} DigiMarket. Tất cả quyền được bảo lưu.</p>
            <div class="the-footer__bottom-links">
                <a href="#">Chính sách bảo mật</a>
                <a href="#">Điều khoản sử dụng</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const footerSections = [
    {
        title: 'Sản phẩm',
        links: [
            { label: 'Streaming', to: '#' },
            { label: 'Mạng xã hội', to: '#' },
            { label: 'Gaming', to: '#' },
            { label: 'Công cụ & Phần mềm', to: '#' },
            { label: 'Giáo dục', to: '#' },
        ],
    },
    {
        title: 'Hỗ trợ',
        links: [
            { label: 'Trung tâm trợ giúp', to: '#' },
            { label: 'Hướng dẫn mua hàng', to: '#' },
            { label: 'Chính sách hoàn trả', to: '#' },
            { label: 'Câu hỏi thường gặp', to: '#' },
        ],
    },
]

const socials = [
    {
        name: 'Facebook',
        url: '#',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>',
    },
    {
        name: 'YouTube',
        url: '#',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0F0F1A"/></svg>',
    },
    {
        name: 'TikTok',
        url: '#',
        icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .56.04.81.11v-3.51a6.37 6.37 0 00-.81-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.14a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.57z"/></svg>',
    },
]
</script>

<style scoped lang="scss">
.the-footer {
    background: $bg-sidebar;
    border-top: 1px solid $border-color;
    margin-top: $space-3xl;

    &__inner {
        display: grid;
        grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
        gap: $space-2xl;
        padding: $space-3xl $space-xl $space-2xl;
        max-width: $container-max;
        margin: 0 auto;

        @include respond-to('lg') {
            grid-template-columns: 1fr 1fr;
            gap: $space-xl;
        }

        @include respond-to('sm') {
            grid-template-columns: 1fr;
        }
    }

    &__logo {
        display: flex;
        align-items: center;
        gap: $space-sm;
        margin-bottom: $space-md;

        &-icon {
            width: 32px;
            height: 32px;

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

    &__desc {
        font-size: $fs-sm;
        color: $text-muted;
        line-height: $lh-relaxed;
        margin-bottom: $space-lg;
    }

    &__socials {
        display: flex;
        gap: $space-sm;
    }

    &__social {
        @include flex-center;
        width: 36px;
        height: 36px;
        background: $bg-glass;
        border: 1px solid $border-color;
        border-radius: $radius-sm;
        color: $text-secondary;
        transition: all $transition-fast;

        &:hover {
            background: $bg-glass-hover;
            color: $primary-light;
            border-color: $primary;
            transform: translateY(-2px);
        }
    }

    &__col-title {
        font-family: $font-heading;
        font-size: $fs-base;
        font-weight: $fw-semibold;
        color: $text-primary;
        margin-bottom: $space-md;
    }

    &__col-list {
        display: flex;
        flex-direction: column;
        gap: $space-sm;
    }

    &__link {
        font-size: $fs-sm;
        color: $text-muted;
        transition: color $transition-fast;
        text-decoration: none;

        &:hover {
            color: $primary-light;
        }
    }

    &__contact-list {
        display: flex;
        flex-direction: column;
        gap: $space-md;
    }

    &__contact-item {
        display: flex;
        align-items: center;
        gap: $space-sm;
        font-size: $fs-sm;
        color: $text-secondary;

        svg {
            flex-shrink: 0;
            color: $primary-light;
        }
    }

    &__bottom {
        @include flex-between;
        padding: $space-lg $space-xl;
        border-top: 1px solid $border-color;
        max-width: $container-max;
        margin: 0 auto;

        @include respond-to('sm') {
            flex-direction: column;
            gap: $space-sm;
            text-align: center;
        }

        p {
            font-size: $fs-xs;
            color: $text-muted;
        }

        &-links {
            display: flex;
            gap: $space-lg;

            a {
                font-size: $fs-xs;
                color: $text-muted;
                text-decoration: none;
                transition: color $transition-fast;

                &:hover {
                    color: $primary-light;
                }
            }
        }
    }
}
</style>
