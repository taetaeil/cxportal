<script setup lang="ts">
import Pagination from '../../components/Pagination.vue'
import type { IPaginationOptions } from '../../types/pagination'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const paginationOptions: IPaginationOptions = reactive({
  currentPage: 1,
  totalCount: 1000,
  limit: 20,
  limitOptions: [50, 100, 150, 200],
  maxPagesShown: 10,
})

function changeLimit(newLimit: number) {
  paginationOptions.limit = newLimit
}
</script>

<template>
  <div class="p-20">
    <h2 class="mb-10 text-3xl font-semibold">
      Pagination
    </h2>
    <div class="my-10">
      <form class="form">
        <FormItem label="size=&quot;sm&quot;">
          <Pagination v-model="paginationOptions.currentPage" :total-count="paginationOptions.totalCount"
            :limit="paginationOptions.limit" :limit-options="paginationOptions.limitOptions"
            :max-pages-shown="paginationOptions.maxPagesShown" below-limit-shown limit-options-shown
            @change-limit="changeLimit" size="sm" />
        </FormItem>
        <FormItem label="default">
          <Pagination v-model="paginationOptions.currentPage" :total-count="paginationOptions.totalCount"
            :limit="paginationOptions.limit" :limit-options="paginationOptions.limitOptions"
            :max-pages-shown="paginationOptions.maxPagesShown" below-limit-shown limit-options-shown
            @change-limit="changeLimit" />
        </FormItem>
        <FormItem label="size=&quot;lg&quot;">
          <Pagination v-model="paginationOptions.currentPage" :total-count="paginationOptions.totalCount"
            :limit="paginationOptions.limit" :limit-options="paginationOptions.limitOptions"
            :max-pages-shown="paginationOptions.maxPagesShown" below-limit-shown limit-options-shown
            @change-limit="changeLimit" size="lg" />
        </FormItem>
      </form>
    </div>
  </div>
</template>
