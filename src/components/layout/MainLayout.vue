<template>
    <div :class="['main-layout', { 'main-layout--collapsed': appStore.sidebarCollapsed }]">
        <TheSidebar />
        <TheHeader />
        <main class="main-layout__content">
            <router-view />
            <TheFooter />
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useAppStore } from '@/stores/useAppStore'
import TheSidebar from './TheSidebar.vue'
import TheHeader from './TheHeader.vue'
import TheFooter from './TheFooter.vue'

const appStore = useAppStore()

function checkMobile() {
    appStore.setMobile(window.innerWidth <= 1024)
}

onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped lang="scss">
.main-layout {
    display: flex;
    min-height: 100vh;

    &__content {
        flex: 1;
        min-width: 0;
        margin-left: $sidebar-width;
        min-height: 100vh;
        padding-top: $header-height;
        transition: margin-left $transition-base;

        @include respond-to('lg') {
            margin-left: 0 !important;
        }
    }

    &--collapsed {
        .main-layout__content {
            margin-left: $sidebar-collapsed;
        }
    }
}
</style>
