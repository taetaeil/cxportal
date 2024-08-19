<script setup lang="ts">
import { VITE_ICON_SRC_PATH } from '../env.d.ts'
const props = defineProps({
  name: {
    type: String,
  },
  extension: {
    type: String,
    default: 'svg',
    required: false,
  },
  alt: {
    type: String,
  },
  width: {
    type: String,
  },
  height: {
    type: String,
  },
})

const imageSrc = ref(`/icon/${props.name}.${props.extension}`)
</script>

<template>
  <img :src="imageSrc" class="icon" :alt="alt" :style="`width: ${width}px; height: ${height}px;`">
</template>

<style lang="scss" scoped></style>
