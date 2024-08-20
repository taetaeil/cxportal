<script setup lang="ts">
import CustomTextarea from '~/components/CustomTextarea.vue'


const form = {
  input: 'Hi~ this is example',
  textarea: 'Hi~ this is example',
}

const noData = ref()
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Textarea
    </h2>

    <!-- textarea -->
    <div class="my-10">
      <form class="form">
        <FormItem label="Basic">
          <CustomTextarea v-model="noData" placeholder="20자 내로 설명을 입력해주세요." />
        </FormItem>
        <FormItem label="Disabled">
          <CustomTextarea v-model="form.textarea" disabled />
        </FormItem>
        <FormItem label="Readonly">
          <CustomTextarea v-model="form.textarea" readonly />
        </FormItem>
        <FormItem label="Error">
          <CustomTextarea v-model="form.textarea" valid-message="입력하신 내용을 확인해주세요." />
        </FormItem>
      </form>
    </div>
    <hr>


  </div>
</template>

<style scoped lang="scss"></style>
