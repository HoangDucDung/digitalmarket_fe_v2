<template>
    <div class="auth-layout">
        <router-view />
    </div>
</template>

<script setup lang="ts">
// AuthLayout simply provides a full screen wrapper without Sidebar/Header
</script>

<style scoped>
.auth-layout {
    min-height: 100vh;
    background: #0F0F1A;
}
</style>
