<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const { t } = useI18n()
const props = defineProps<{
  modelValue: boolean
}>()
const emits = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'cancel'): void
  (e: 'confirm', value: { popupMode: string }): void
}>()

const isShow = computed({
  get() {
    return props.modelValue
  },
  set(val) {
    emits('update:modelValue', val)
  }
})

const excelForm = reactive({
  work: '',
  table: '',
  expoStatus: 'Y',
  useStatus: 'Y',
  file: '테스트 파일명',
})

const onFileChange = (file: File[]) => {
  console.log('ee', file)
}

const handleCancel = () => {
  emits('cancel')
}

</script>

<template>
  <common-modal v-model="isShow" title="엑셀 템플릿 관리 팝업">
    <template #content>
      <form class="form">
        <FormItem :label="t('excel-temp.label.work')">
          <CustomInput v-model="excelForm.work" />
        </FormItem>
        <FormItem :label="t('excel-temp.label.table')">
          <CustomInput v-model="excelForm.table" />
        </FormItem>
        <FormItem :label="t('excel-temp.label.use')">
          <el-radio-group v-model="excelForm.expoStatus">
            <el-radio value="Y">
              Yes
            </el-radio>
            <el-radio value="N">
              No
            </el-radio>
          </el-radio-group>
        </FormItem>
        <FormItem :label="t('excel-temp.label.file')" use-col-group>
          <FileUpload @file-change="onFileChange" />
        </FormItem>
      </form>
    </template>
    <template #footer>
      <button type="button" class="btn__negative--md" @click="handleCancel">
        {{ t('common.button.cancel') }}
      </button>
      <button type="button" class="btn__secondary--md" @click="handleCancel">
        {{ t('common.button.save') }}
      </button>
    </template>
  </common-modal>
</template>
<style lang="scss" scoped>
.el-tree {
  overflow-y: auto;
  width: 100%;
  max-height: 200px;
}
</style>