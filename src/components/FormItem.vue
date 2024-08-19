<script setup lang="ts">
const props = defineProps({
  formCol: {
    type: Boolean,
    required: false,
  },
  label: {
    type: String,
    required: false,
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  useBtn: {
    type: Boolean,
    required: false,
  },
  useGroup: {
    type: Boolean,
    required: false,
  },
  useColGroup: {
    type: Boolean,
    required: false,
  },
  list: {
    type: Array,
    required: false,
    default: () => [],
  },
})
</script>

<template>
  <div class="form__item" :class="{ 'form__item--col': formCol }">
    <div v-if="label" class="form__label-wrap">
      <label class="form__label" :class="{ 'is-required': required }">{{ label }}</label>
      <slot v-if="useBtn && formCol" name="label-btn" />
    </div>
    <div v-if="useColGroup && list.length > 0" class="form__group--col">
      <template v-for="(row, index) in list" :key="`row-${row.id}`">
        <div class="form__group">
          <slot :row="row" :index="index" />
        </div>
      </template>
    </div>
    <div v-else-if="useColGroup" class="form__group--col">
      <slot />
    </div>
    <div v-else-if="useGroup" class="form__group">
      <slot />
    </div>
    <slot v-else />
  </div>
</template>
