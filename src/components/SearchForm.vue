<script setup lang="ts">

defineProps({
  useReset: {
    type: Boolean,
    default: false,
  },
  resetText: {
    type: String,
  },
  searchText: {
    type: String,
  },
})

const emit = defineEmits(['clear', 'search'])
</script>

<template>
  <div class="search-form">
    <div class="search-form__item-area">
      <slot />
    </div>
    <div class="search-form__btn-area">
      <button v-if="useReset" type="button" class="btn__primary-line--md has-icon" @click="emit('clear')">
        <Icon name="reset__line--9e4" width="24" height="24" alt="" area-hidden="true" />
        초기화
      </button>
      <button type="button" class="btn__primary--md has-icon" @click="emit('search')">
        <Icon name="search__line--fff" width="24" height="24" alt="" area-hidden="true" />
        검색
      </button>
      <slot name="search-form__btn" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
