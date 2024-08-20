<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from '../../components/CustomInput.vue'// select-box


const noData = ref()

const form = {
  input: 'Hi~ this is example',
}

</script>

<template>
  <div class="p-20">

    <h2 class="text-3xl font-semibold">
      Input
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p><em class="font-bold">use-col-group</em>은 <em class="font-bold">:list</em> 사용이 가능합니다. 아래 예제는 list를 사용했습니다.</p>
      <p><em class="font-bold">form-col</em> 일때만 <em class="font-bold">use-btn</em>사용이 가능합니다.</p>
      <p class="text-rose-500">&#8251; 아래 예제 중 <em class="font-bold">타겟 테이블의 형태</em>는 <em
          class="font-bold">form-col</em>로만
        사용합니다.</p>
    </div>
    <!-- input -->
    <div class="my-10">
      <form class="form">
        <FormItem label="Basic">
          <CustomInput v-model="noData" max-length="10" placeholder="10글자 내로 입력하세요." />
        </FormItem>
        <FormItem label="size=&quot;sm&quot;">
          <CustomInput v-model="form.input" size="sm" />
        </FormItem>
        <FormItem label="size=&quot;lg&quot;">
          <CustomInput v-model="form.input" size="lg" />
        </FormItem>
        <FormItem label="Use delete btn">
          <CustomInput v-model="form.input" use-delete />
        </FormItem>
        <FormItem label="Disabled">
          <CustomInput v-model="form.input" disabled />
        </FormItem>
        <FormItem label="Readonly">
          <CustomInput v-model="form.input" readonly />
        </FormItem>
        <FormItem label="Error">
          <CustomInput v-model="form.input" valid-message="입력하신 내용을 확인해주세요." />
        </FormItem>
      </form>
    </div>
    <hr>
  </div>
</template>

<style scoped lang="scss"></style>
