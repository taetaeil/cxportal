<script setup lang="ts">
const anncForm = reactive<IAnnouncementDetail>({
  title: '',
  createUser: '',
  createDate: '',
  updateUser: '',
  updateDate: '',
  file: '',
  postingPeriod: '',
})
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Datepicker
    </h2>
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        RangeDatepicker
      </mark>
      <form class="form">
        <FormItem label="Basic">
          <el-date-picker v-model="anncForm.postingPeriod" type="daterange" value-format="YYYY-MM-DD"
            start-placeholder="시작일" end-placeholder="종료일" />
        </FormItem>
        <FormItem label="Disabled">
          <el-date-picker v-model="anncForm.postingPeriod" type="daterange" value-format="YYYY-MM-DD"
            start-placeholder="시작일" end-placeholder="종료일" disabled />
        </FormItem>
        <FormItem label="Readonly">
          <el-date-picker v-model="anncForm.postingPeriod" type="daterange" value-format="YYYY-MM-DD"
            start-placeholder="시작일" end-placeholder="종료일" readonly class="is-readonly" />
        </FormItem>
      </form>
    </div>
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Timepicker
      </mark>
      <form class="form">
        <FormItem label="Basic">
          <el-time-select v-model="anncForm.postingPeriod" />
        </FormItem>
      </form>
    </div>
    <hr>
  </div>
</template>
