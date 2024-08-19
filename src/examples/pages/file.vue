<script setup lang="ts">
import FileUpload from '~/components/FileUpload.vue'

const onFileChange = (file: File[]) => {
  console.log('ee', file)
}
</script>

<template>
  <FileUpload @file-change="onFileChange" />
</template>
