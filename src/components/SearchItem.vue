<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div class="search-form__item">
    <label v-if="label" class="search-form__label">{{ props.label }}</label>
    <slot />
  </div>
</template>
