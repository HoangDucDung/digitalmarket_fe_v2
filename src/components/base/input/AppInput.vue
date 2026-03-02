<template>
  <div :class="['app-input', { 'app-input--error': error, 'app-input--focused': focused }]">
    <span v-if="$slots.icon" class="app-input__icon">
      <slot name="icon" />
    </span>
    <input :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled"
      :class="['app-input__field', inputClass]" v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" @focus="focused = true"
      @blur="focused = false" />
    <span v-if="$slots.suffix" class="app-input__suffix">
      <slot name="suffix" />
    </span>
    <p v-if="error" class="app-input__error">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    type?: string
    error?: string
    disabled?: boolean
    inputClass?: string
  }>(),
  {
    modelValue: '',
    placeholder: '',
    type: 'text',
    error: '',
    disabled: false,
    inputClass: '',
  }
)

defineEmits<{
  'update:modelValue': [value: string]
}>()

const focused = ref(false)
</script>

<style scoped lang="scss">
.app-input {
  position: relative;
  display: flex;
  align-items: center;
  background: $bg-card;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  transition: all $transition-base;
  overflow: hidden;

  &--focused {
    border-color: $primary;
    box-shadow: 0 0 0 3px rgba($primary, 0.15);
  }

  &--error {
    border-color: $danger;

    .app-input__field::placeholder {
      color: rgba($danger, 0.5);
    }
  }

  &__icon {
    @include flex-center;
    padding-left: $space-md;
    color: $text-muted;
    font-size: $fs-md;
    flex-shrink: 0;
  }

  &__field {
    width: 100%;
    padding: 10px $space-md;
    background: transparent;
    border: none;
    color: $text-primary;
    font-size: $fs-base;

    &::placeholder {
      color: $text-muted;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__suffix {
    @include flex-center;
    padding-right: $space-md;
    flex-shrink: 0;
  }

  &__error {
    position: absolute;
    bottom: -20px;
    left: 0;
    font-size: $fs-xs;
    color: $danger;
  }
}
</style>
