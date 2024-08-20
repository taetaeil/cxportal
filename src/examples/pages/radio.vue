<script setup lang="ts">
const form = reactive({
  checkbox1: true,
  checkbox2: '',
  checkbox3: true,
  checkbox4: '',
  checkbox5: [''],
  radio: 'A',

})
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Radio
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p><em class="font-bold">el-checkbox-group</em> 사용 시, <em class="font-bold">수직 정렬</em>됩니다.
      </p>
    </div>

    <!-- radio -->
    <div class="my-10">
      <form class="form content-box">
        <FormItem label="Basic">
          <el-radio-group v-model="form.radio">
            <el-radio value="A">
              A
            </el-radio>
            <el-radio value="B">
              B
            </el-radio>
          </el-radio-group>
        </FormItem>
        <FormItem label="Disabled">
          <el-radio-group v-model="form.radio" disabled>
            <el-radio value="A">
              A
            </el-radio>
            <el-radio value="B">
              B
            </el-radio>
          </el-radio-group>
        </FormItem>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
