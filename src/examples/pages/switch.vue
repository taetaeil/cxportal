<script lang="ts" setup>
const value1 = ref(false)
const value2 = ref(true)
const value3 = ref(false)
const radio1 = ref('select1')
const radio2 = ref('all')
const radio3 = ref('mobile')
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Switch
    </h2>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Toggle
      </mark>
      <form class="flex flex-col gap-2">
        <el-switch v-model="value1" />
        <el-switch v-model="value2" />
        <el-switch v-model="value3" disabled />
      </form>
    </div>
    <div>
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        filter
      </mark>
      <form class="flex flex-col gap-2">
        <el-radio-group v-model="radio1">
          <el-radio-button label="선택" value="select1" />
          <el-radio-button label="선택" value="select2" />
          <el-radio-button label="선택" value="select3" />
        </el-radio-group>
        <el-radio-group v-model="radio2">
          <el-radio-button label="전체" value="all" />
          <el-radio-button label="공통" value="common" />
          <el-radio-button label="모바일" value="mobile" />
          <el-radio-button label="홈" value="home" />
          <el-radio-button label="기업" value="company" />
        </el-radio-group>
        <el-radio-group v-model="radio3">
          <el-radio-button label="모바일" value="mobile" />
          <el-radio-button label="홈" value="home" />
          <el-radio-button label="기업" value="company" />
        </el-radio-group>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>