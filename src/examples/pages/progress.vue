<script lang="ts" setup>
import { ref } from 'vue'

const loading = ref(true)
//File
const onFileChange = (file: File[]) => {
  console.log('ee', file)
}
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Progress
    </h2>
    <!-- btn__primary -->
    <div class="my-10">
      <form class="form content-box">
        <FormItem label="첨부파일">
          <FileUpload @file-change="onFileChange" v-loading="loading" />
        </FormItem>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>
