<template>
  <AuthLayout v-if="isAuthLayout" />
  <NotFoundPage v-else-if="isNotFoundLayout" />
  <MainLayout v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '@/components/layout/MainLayout.vue'
import AuthLayout from '@/components/layout/AuthLayout.vue'
import NotFoundPage from '@/components/layout/NotFoundPage.vue'

const route = useRoute()
const isAuthLayout = computed(() => route.meta.layout === 'auth')
const isNotFoundLayout = computed(() => route.meta.layout === 'not-found')
</script>
