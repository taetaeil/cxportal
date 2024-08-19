<script setup lang="ts">
import CustomInput from '../../components/CustomInput.vue'// select-box
import type { IOptions } from '../types/select-box'
import mockOptions from '../mock/options.js'
// File
import FileUpload from '../../components/FileUpload.vue'


const form = {
  input: 'Hi~ this is example',
  checkbox1: ['A'],
  radio: 'A',
}

// select-box
const options = ref<IOptions[]>(mockOptions)
const initData = ref(3)

//SearchForm
const handleSearch = () => { }
const handleReset = () => { }

//File
const onFileChange = (file: File[]) => {
  console.log('ee', file)
}

// form-col-group
const formColRowList = [
  {
    id: 1,
    input: '',
  },
  {
    id: 2,
    input: '',
  },
  {
    id: 3,
    input: '',
  },
]

// target Table
interface RowList {
  id: string
  tableName: string
  column: string
  description: string
}

interface SpanMethodProps {
  row: RowList
  rowIndex: number
  columnIndex: number
}

const addRowspan = ({
  rowIndex,
  columnIndex,
}: SpanMethodProps) => {
  if (columnIndex === 0) {
    const currentId = tableData[rowIndex].id;
    if (currentId === 'Source') {
      if (rowIndex === 0 || tableData[rowIndex - 1].id !== 'Source') {
        let rowspan = 1;
        for (let i = rowIndex + 1; i < tableData.length; i++) {
          if (tableData[i].id === 'Source') {
            rowspan++;
          } else {
            break;
          }
        }
        return {
          rowspan,
          colspan: 1,
        };
      } else {
        return {
          rowspan: 0,
          colspan: 0,
        };
      }
    }
  }
}

const tableData: RowList[] = [
  {
    id: 'Source',
    tableName: '',
    column: '',
    description: ''
  },
  {
    id: 'Target',
    tableName: '',
    column: '',
    description: ''
  },
]

const targetTable = ref<[]>([])
const addSource = (tableIndex: number) => {
  const newSource = {
    id: 'Source',
    tableName: '',
    column: '',
    description: ''
  }
  const targetIndex = targetTable.value[tableIndex].findIndex(i => i.id === 'Target')
  targetTable.value[tableIndex].splice(targetIndex, 0, newSource)
}


const deleteSource = (tableIndex: number, rowIndex: number) => {
  targetTable.value[tableIndex].splice(rowIndex, 1)
}

const addTargetTable = () => {
  const newTable = [
    {
      id: 'Source',
      tableName: '',
      column: '',
      description: ''
    },
    {
      id: 'Target',
      tableName: '',
      column: '',
      description: ''
    },
  ]
  targetTable.value.push(newTable)
}


onMounted(() => {
  targetTable.value = [tableData]
})
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Form
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p><em class="font-bold">use-col-group</em>은 <em class="font-bold">:list</em> 사용이 가능합니다. 아래 예제는 list를 사용했습니다.</p>
      <p><em class="font-bold">form-col</em> 일때만 <em class="font-bold">use-btn</em>사용이 가능합니다.</p>
      <p class="text-rose-500">&#8251; 아래 예제 중 <em class="font-bold">타겟 테이블의 형태</em>는 <em
          class="font-bold">form-col</em>로만
        사용합니다.</p>
    </div>
    <!-- Form row -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Form row (Default)
      </mark>
      <!-- 복사영역 -->
      <form class="form content-box">
        <FormItem label="Basic">
          <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
        </FormItem>
        <FormItem label="Required" required>
          <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
        </FormItem>
        <FormItem label="Radio">
          <el-radio-group v-model="form.radio">
            <el-radio value="A">
              A
            </el-radio>
            <el-radio value="B">
              B
            </el-radio>
          </el-radio-group>
        </FormItem>
        <FormItem label="Checkbox">
          <el-checkbox-group v-model="form.checkbox1">
            <el-checkbox label="A" value="A" />
            <el-checkbox label="B" value="B" />
          </el-checkbox-group>
        </FormItem>
        <FormItem label="첨부파일">
          <FileUpload @file-change="onFileChange" />
        </FormItem>
        <FormItem label="&quot;use-group&quot;" use-group>
          <CustomDropdown v-model="initData" :options="options" />
          <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
        </FormItem>
        <FormItem label="&quot;use-group&quot;" use-group>
          <FormItem label="label이 있는 경우">
            <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
          </FormItem>
          <FormItem label="이렇게 보입니다">
            <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
          </FormItem>
        </FormItem>
        <FormItem label="&quot;use-col-group&quot;" use-col-group :list="formColRowList">
          <template #default="{ row, index }">
            <CustomInput v-model="row.input" max-length="10" placeholder="10글자 내로 입력하세요." />
            <button v-if="index === formColRowList.length - 1" type="button">
              <icon name="plus-round__full" width="36" height="36" alt="추가" />
            </button>
            <button type="button">
              <icon name="minus-round__full" width="36" height="36" alt="삭제" />
            </button>
          </template>
        </FormItem>
      </form>
      <!-- // -->
      <div class="my-10">
        <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
          Form col (form-col)
        </mark>
        <form class="form content-box">
          <FormItem label="&quot;form-col&quot;" form-col>
            <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
          </FormItem>
          <FormItem label="&quot;use-btn&quot;" use-btn form-col>
            <template #label-btn>
              <button type="button" class="btn__secondary--sm">
                추가
              </button>
            </template>
            <CustomInput v-model="form.input" max-length="10" placeholder="10글자 내로 입력하세요." />
          </FormItem>
          <FormItem label="타겟 테이블" required form-col use-btn>
            <template #label-btn>
              <button type="button" class="btn__secondary--sm" @click="addTargetTable">
                추가
              </button>
            </template>
            <div v-for="(table, tableIndex) in targetTable" :key="tableIndex" class="mb-2.5 box--f7f">
              <el-table :data="table" :span-method="addRowspan" style="width: 100%;" class="no-hover">
                <el-table-column prop="id" align="center" min-width="15" />
                <el-table-column prop="tableName" label="테이블 명" min-width="25">
                  <template #default="scope">
                    <CustomInput v-model="scope.row.tableName" placeholder="테이블명" />
                  </template>
                </el-table-column>
                <el-table-column prop="column" label="컬럼명" min-width="25">
                  <template #default="scope">
                    <CustomInput v-model="scope.row.column" placeholder="컬럼명" />
                  </template>
                </el-table-column>
                <el-table-column prop="description" label="설명" min-width="25">
                  <template #default="scope">
                    <CustomInput v-model="scope.row.description" placeholder="설명" />
                  </template>
                </el-table-column>
                <el-table-column align="center" label="row" min-width="10">
                  <template #default="scope">
                    <div v-if="scope.row.id === 'Source'" class="flex justify-center">
                      <button v-if="scope.$index === 0" type="button" @click="addSource(tableIndex)">
                        <icon name="plus-round__full" width="36" height="36" alt="추가" />
                      </button>
                      <button type="button" @click="deleteSource(tableIndex, scope.$index)">
                        <icon name="minus-round__full" width="36" height="36" alt="삭제" />
                      </button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            <div>
              <p>&#8251; Sorce 테이블을 추가 하시려면 &#39;&#43;&#39; 버튼을 클릭해주세요.</p>
              <p class="mt-1">&#8251; Target Table 이 여러 개 일경우 &#39;추가&#39; 버튼을 클릭해주세요.</p>
            </div>
          </FormItem>
        </form>
      </div>
    </div>
    <hr>
    <!-- Search Form -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Search Form
      </mark>
      <SearchForm use-reset @search="handleSearch" @clear="handleReset">
        <SearchItem label="검색조건">
          <CustomDropdown v-model="initData" :options="options" />
        </SearchItem>
        <SearchItem label="검색어">
          <CustomInput v-model="form.input" placeholder="검색어를 입력하세요." @keyup.enter="handleSearch" />
        </SearchItem>
      </SearchForm>
      <div class="my-10" />
      <SearchForm use-reset @search="handleSearch" @clear="handleReset">
        <SearchItem>
          <CustomDropdown v-model="initData" :options="options" />
          <CustomInput v-model="form.input" placeholder="검색어를 입력하세요." @keyup.enter="handleSearch" />
        </SearchItem>
        <SearchItem label="관리자 여부">
          <CustomDropdown v-model="initData" :options="options" />
        </SearchItem>
        <SearchItem label="사용 여부">
          <CustomDropdown v-model="initData" :options="options" />
        </SearchItem>
      </SearchForm>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
