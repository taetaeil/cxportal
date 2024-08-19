<script setup lang="ts">
withDefaults(defineProps<{
  message?: string
}>(), {
  message: '',
})
</script>

<template>
  <div class="status nodata">
    <icon name="nodata--7f8" width="64" height="64" alt="" aria-hidden="true" />
    <p> {{ message }}</p>
  </div>
</template>

<style lang="scss"></style>
