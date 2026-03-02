<template>
  <button
    :class="['app-btn', `app-btn--${variant}`, `app-btn--${size}`, { 'app-btn--loading': loading, 'app-btn--block': block }]"
    :disabled="disabled || loading" v-bind="$attrs">
    <span v-if="loading" class="app-btn__spinner"></span>
    <span v-if="$slots.icon && !loading" class="app-btn__icon">
      <slot name="icon" />
    </span>
    <span class="app-btn__text">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent' | 'danger'
    size?: 'sm' | 'md' | 'lg'
    loading?: boolean
    disabled?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
  }
)
</script>

<style scoped lang="scss">
.app-btn {
  @include flex-center;
  gap: $space-sm;
  font-family: $font-body;
  font-weight: $fw-semibold;
  border: none;
  border-radius: $radius-md;
  cursor: pointer;
  transition: all $transition-base;
  white-space: nowrap;
  position: relative;
  overflow: hidden;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  // Sizes
  &--sm {
    padding: 6px 14px;
    font-size: $fs-sm;
    border-radius: $radius-sm;
  }

  &--md {
    padding: 10px 20px;
    font-size: $fs-base;
  }

  &--lg {
    padding: 14px 28px;
    font-size: $fs-md;
    border-radius: $radius-lg;
  }

  // Variants
  &--primary {
    background: $gradient-primary;
    color: #fff;
    box-shadow: $shadow-sm;

    &:hover:not(:disabled) {
      box-shadow: $shadow-glow-primary;
      transform: translateY(-1px);
    }
  }

  &--secondary {
    background: $secondary;
    color: $bg-dark;

    &:hover:not(:disabled) {
      box-shadow: $shadow-glow-secondary;
      transform: translateY(-1px);
    }
  }

  &--accent {
    background: $gradient-accent;
    color: #fff;

    &:hover:not(:disabled) {
      box-shadow: $shadow-glow-accent;
      transform: translateY(-1px);
    }
  }

  &--outline {
    background: transparent;
    border: 1px solid $border-light;
    color: $text-primary;

    &:hover:not(:disabled) {
      background: $bg-glass;
      border-color: $primary-light;
      color: $primary-light;
    }
  }

  &--ghost {
    background: transparent;
    color: $text-secondary;

    &:hover:not(:disabled) {
      background: $bg-glass;
      color: $text-primary;
    }
  }

  &--danger {
    background: $danger;
    color: #fff;

    &:hover:not(:disabled) {
      background: #E53935;
    }
  }

  &--block {
    width: 100%;
  }

  &--loading {
    pointer-events: none;
  }

  &__spinner {
    width: 16px;
    height: 16px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  &__icon {
    @include flex-center;
    font-size: 1.1em;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
