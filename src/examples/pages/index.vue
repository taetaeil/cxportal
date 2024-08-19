<script lang="ts" setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const uiComponentData = reactive<any[]>([
  {
    name: 'button',
    desc: 'Button',
  },
  {
    name: 'dropdown',
    desc: 'Dropdown',
  },
  {
    name: 'input',
    desc: 'Basic / Search / File / Number',
  },
  {
    name: 'icon-example',
    desc: 'Icon Image Example',
  },
  {
    name: 'checkbox',
    desc: 'Checkbox',
  },
  {
    name: 'switch',
    desc: 'Switch',
  },
  {
    name: 'tab',
    desc: 'Tab',
  },
  {
    name: 'datepicker',
    desc: 'Range Datepicker',
  },
  {
    name: 'title',
    desc: 'Title',
  },
  {
    name: 'modal',
    desc: 'Modal',
  },
  {
    name: 'form',
    desc: 'Form / SearchForm / File',
  },
  {
    name: 'box',
    desc: 'Box',
  },
  {
    name: 'carousel',
    desc: 'Carousel',
  },
  {
    name: 'g-c-area',
    desc: 'Graph / Chart Area',
  },
  {
    name: 'table',
    desc: 'Table',
  },
  {
    name: 'radio',
    desc: 'Radio / Filter',
  },
  {
    name: 'Pagination',
    desc: 'Pagination',
  },
  {
    name: 'textarea',
    desc: 'Textarea',
  },
  {
    name: 'tooltip',
    desc: 'Tooltip',
  },
  {
    name: 'divider',
    desc: 'Divider',
  },
  {
    name: 'control-bar',
    desc: 'Control Bar ',
  },
  {
    name: 'tree',
    desc: 'Tree',
  },
  // {
  //   name: 'progress',
  //   desc: 'Progress',
  // },
  // {
  //   name: 'chart',
  //   desc: 'Bar / Line',
  // },
])

const movePage = (target: any) => {
  router.push(`/examples/${target.name}`)
}
</script>

<template>
  <div class="p-20 examples">
    <h2 class="mb-10 text-3xl font-semibold">
      UI Examples
    </h2>
    <div class="p-10 bg-white rounded-3xl">
      <el-table :data="uiComponentData" row-class-name="cursor-pointer" @row-click="movePage">
        <el-table-column type="index" width="'5%'" />
        <el-table-column property="name" label="Name" width="'20%'" />
        <el-table-column property="desc" label="Description" width="'75%'" />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<route lang="yaml">
name: ui-examples
meta:
  isPublicPath: true
  layout: empty
</route>
