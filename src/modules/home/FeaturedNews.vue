<template>
    <section class="featured-news section">
        <div class="featured-news__container">
            <div class="section-header">
                <h2 class="section-title">📰 Tin Tức Nổi Bật</h2>
                <a href="#" class="section-link">
                    Xem tất cả
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </a>
            </div>

            <div class="featured-news__grid">
                <!-- Main article -->
                <div v-if="articles[0]" class="news-card news-card--main animate-fade-in-up delay-1">
                    <div class="news-card__image-wrapper">
                        <img :src="articles[0].thumbnail" :alt="articles[0].title" class="news-card__image" />
                        <div class="news-card__overlay"></div>
                        <div class="news-card__content-overlay">
                            <span class="news-card__cat">{{ articles[0].category }}</span>
                            <h3 class="news-card__title">{{ articles[0].title }}</h3>
                            <div class="news-card__meta">
                                <span>{{ articles[0].author.name }}</span>
                                <span>•</span>
                                <span>{{ articles[0].publishedAt }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Side articles -->
                <div class="featured-news__side">
                    <div v-for="(article, index) in articles.slice(1)" :key="article.id"
                        class="news-card news-card--side animate-fade-in-up" :class="`delay-${index + 2}`">
                        <div class="news-card__thumb">
                            <img :src="article.thumbnail" :alt="article.title" />
                        </div>
                        <div class="news-card__info">
                            <span class="news-card__cat news-card__cat--small">{{ article.category }}</span>
                            <h4 class="news-card__title news-card__title--small">{{ article.title }}</h4>
                            <div class="news-card__meta news-card__meta--small">
                                <span>{{ article.publishedAt }}</span>
                                <span v-if="article.readTime">• {{ article.readTime }} phút đọc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { NewsArticle } from '@/types'

const articles: NewsArticle[] = [
    {
        id: 1,
        title: 'Netflix công bố gói Premium mới với chất lượng 8K, giá không đổi',
        slug: 'netflix-premium-8k',
        excerpt: 'Netflix vừa công bố cập nhật lớn cho gói Premium, nâng cấp chất lượng stream lên 8K...',
        thumbnail: 'https://placehold.co/800x500/1A1A2E/6C5CE7?text=Netflix+8K',
        author: { name: 'Minh Tuấn', avatar: '' },
        publishedAt: '02/03/2026',
        category: 'Streaming',
        readTime: 5,
    },
    {
        id: 2,
        title: 'Spotify ra mắt tính năng AI DJ cá nhân hóa playlist',
        slug: 'spotify-ai-dj',
        excerpt: 'Tính năng mới của Spotify sử dụng AI để tạo playlist phù hợp với tâm trạng người dùng...',
        thumbnail: 'https://placehold.co/400x300/1A1A2E/00CECE?text=Spotify+AI',
        author: { name: 'Thu Hà', avatar: '' },
        publishedAt: '01/03/2026',
        category: 'Âm nhạc',
        readTime: 3,
    },
    {
        id: 3,
        title: 'TikTok Premium mở rộng dịch vụ sang 15 quốc gia mới',
        slug: 'tiktok-premium-expand',
        excerpt: 'TikTok Premium chính thức có mặt tại Việt Nam và 14 quốc gia khác ở Đông Nam Á...',
        thumbnail: 'https://placehold.co/400x300/1A1A2E/FD79A8?text=TikTok+Premium',
        author: { name: 'Hoàng Nam', avatar: '' },
        publishedAt: '28/02/2026',
        category: 'Mạng xã hội',
        readTime: 4,
    },
    {
        id: 4,
        title: 'Top 10 phần mềm học tiếng Anh tốt nhất 2026',
        slug: 'top-10-phan-mem-hoc-tieng-anh',
        excerpt: 'Danh sách các ứng dụng học tiếng Anh hiệu quả nhất được đánh giá bởi cộng đồng...',
        thumbnail: 'https://placehold.co/400x300/1A1A2E/2196F3?text=Top+10+App',
        author: { name: 'Lan Anh', avatar: '' },
        publishedAt: '27/02/2026',
        category: 'Giáo dục',
        readTime: 6,
    },
]
</script>

<style scoped lang="scss">
.featured-news {
    &__container {
        padding: 0 $space-lg;

        @include respond-to('lg') {
            padding: 0 $space-md;
        }
    }

    &__grid {
        display: grid;
        grid-template-columns: 1.2fr 1.5fr;
        gap: $space-md;

        @include respond-to('md') {
            grid-template-columns: 1fr;
        }
    }

    &__side {
        display: flex;
        flex-direction: column;
        gap: $space-md;
    }
}

.news-card {
    @include card-base;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        border-color: $border-light;

        .news-card__image {
            transform: scale(1.05);
        }
    }

    // Main featured article
    &--main {
        .news-card__image-wrapper {
            position: relative;
            height: 100%;
            min-height: 420px;
            overflow: hidden;
            background-color: $bg-sidebar;
            border-radius: $radius-md;

            @include respond-to('md') {
                min-height: 320px;
            }
        }

        .news-card__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform $transition-slow;
        }

        .news-card__overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, transparent 30%, rgba($bg-dark, 0.95) 100%);
        }

        .news-card__content-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: $space-xl;

            @include respond-to('sm') {
                padding: $space-md;
            }
        }
    }

    // Side articles
    &--side {
        display: flex;
        gap: $space-md;
        padding: $space-md;

        &:hover {
            background: $bg-card-hover;
        }
    }

    &__thumb {
        width: 140px;
        height: 100px;
        border-radius: $radius-sm;
        overflow: hidden;
        flex-shrink: 0;
        background-color: $bg-sidebar;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform $transition-base;
        }

        @include respond-to('sm') {
            width: 110px;
            height: 80px;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-width: 0;
    }

    &__cat {
        display: inline-block;
        font-size: $fs-xs;
        font-weight: $fw-semibold;
        color: $secondary;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-bottom: $space-xs;

        &--small {
            font-size: 10px;
        }
    }

    &__title {
        font-family: $font-heading;
        font-size: $fs-lg;
        font-weight: $fw-bold;
        color: $text-primary;
        margin-bottom: $space-sm;
        line-height: $lh-tight;

        &--small {
            font-size: $fs-sm;
            @include truncate(2);
        }
    }

    &__meta {
        display: flex;
        gap: $space-xs;
        font-size: $fs-xs;
        color: $text-muted;

        &--small {
            font-size: 11px;
        }
    }
}
</style>
