<template>
  <div :class="['app-card', { 'app-card--hoverable': hoverable, 'app-card--glass': glass }]">
    <div v-if="$slots.header" class="app-card__header">
      <slot name="header" />
    </div>
    <div class="app-card__body">
      <slot />
    </div>
    <div v-if="$slots.footer" class="app-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    hoverable?: boolean
    glass?: boolean
  }>(),
  {
    hoverable: false,
    glass: false,
  }
)
</script>

<style scoped lang="scss">
.app-card {
  @include card-base;
  overflow: hidden;

  &--hoverable {
    @include card-hover;
    cursor: pointer;
  }

  &--glass {
    @include glass;
    background: $bg-glass;
  }

  &__header {
    padding: $space-md $space-lg;
    border-bottom: 1px solid $border-color;
  }

  &__body {
    padding: $space-lg;
  }

  &__footer {
    padding: $space-md $space-lg;
    border-top: 1px solid $border-color;
  }
}
</style>
