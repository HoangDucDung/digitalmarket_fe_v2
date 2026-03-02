<template>
    <div class="home-page">
        <HeroSlider />
        <FeatureTags />
        <ProductCategories />
        <FeaturedProducts />
        <FeaturedNews />
    </div>
</template>

<script setup lang="ts">
import HeroSlider from '@/modules/home/HeroSlider.vue'
import FeatureTags from '@/modules/home/FeatureTags.vue'
import ProductCategories from '@/modules/home/ProductCategories.vue'
import FeaturedProducts from '@/modules/home/FeaturedProducts.vue'
import FeaturedNews from '@/modules/home/FeaturedNews.vue'
</script>

<style scoped lang="scss">
.home-page {
    padding-bottom: $space-xl;
}
</style>
