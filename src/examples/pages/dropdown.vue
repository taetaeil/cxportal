<script lang="ts" setup>
import { ref } from 'vue'
import type { IOptions } from '../types/select-box'
import CustomDropdown from '~/components/CustomDropdown.vue'
import mockOptions from '../mock/options.js'

const options = ref<IOptions[]>(mockOptions)
const noData = ref()
const initData = ref(3)
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Dropdown
    </h2>
    <!-- Dropdown -->
    <div class="my-10">
      <form class="form">
        <FormItem label="Basic">
          <CustomDropdown v-model="noData" :options="options" placeholder="선택하세요" />
        </FormItem>
        <FormItem label="size=&quot;sm&quot;">
          <CustomDropdown v-model="noData" :options="options" size="sm" placeholder="선택하세요" />
        </FormItem>
        <FormItem label="size=&quot;lg&quot;">
          <CustomDropdown v-model="initData" :options="options" size="lg" />
        </FormItem>
        <FormItem label="Disabled">
          <CustomDropdown v-model="initData" :options="options" disabled />
        </FormItem>
        <FormItem label="Readonly">
          <CustomDropdown v-model="initData" :options="options" readonly />
        </FormItem>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>
