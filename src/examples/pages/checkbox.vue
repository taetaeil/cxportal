<script setup lang="ts">
import { reactive } from 'vue'

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
      Checkbox
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p><em class="font-bold">el-checkbox-group</em> 사용 시, <em class="font-bold">수직 정렬</em>됩니다.
      </p>
    </div>

    <!-- checkbox -->
    <div class="my-10">
      <form class="form content-box">
        <FormItem label="Basic">
          <el-checkbox v-model="form.checkbox1" label="A" value="A">
          </el-checkbox>
          <el-checkbox v-model="form.checkbox2" label="B" value="B">
          </el-checkbox>
        </FormItem>
        <FormItem label="Disabled">
          <el-checkbox v-model="form.checkbox3" label="C" value="C" disabled>
          </el-checkbox>
          <el-checkbox v-model="form.checkbox4" label="D" value="D" disabled>
          </el-checkbox>
        </FormItem>
        <FormItem label="el-checkbox-group">
          <el-checkbox-group v-model="form.checkbox5">
            <el-checkbox label="E" value="E">
            </el-checkbox>
            <el-checkbox label="F" value="F">
            </el-checkbox>
          </el-checkbox-group>
        </FormItem>
      </form>
    </div>
    <hr>
  </div>
</template>
<style></style>