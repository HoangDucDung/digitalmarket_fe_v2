<template>
  <span :class="['app-badge', `app-badge--${variant}`, `app-badge--${size}`]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger'
    size?: 'sm' | 'md'
  }>(),
  {
    variant: 'primary',
    size: 'sm',
  }
)
</script>

<style scoped lang="scss">
.app-badge {
  display: inline-flex;
  align-items: center;
  font-weight: $fw-bold;
  border-radius: $radius-sm;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;

  &--sm {
    padding: 3px 8px;
    font-size: 10px;
  }

  &--md {
    padding: 5px 12px;
    font-size: $fs-xs;
  }

  &--primary {
    background: rgba($primary, 0.2);
    color: $primary-light;
  }

  &--secondary {
    background: rgba($secondary, 0.2);
    color: $secondary;
  }

  &--accent {
    background: rgba($accent, 0.2);
    color: $accent;
  }

  &--success {
    background: rgba($success, 0.2);
    color: $success;
  }

  &--warning {
    background: rgba($warning, 0.2);
    color: $warning;
  }

  &--danger {
    background: rgba($danger, 0.2);
    color: $danger;
  }
}
</style>
