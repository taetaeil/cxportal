<script setup lang="ts">
import { IModalProps } from '../types/modal'
import { MODAL_SIZE } from '../types/modal'

const props = withDefaults(defineProps<IModalProps>(), {
  title: '',
  size: MODAL_SIZE.MEDIUM,
  closeOnClickModal: true,
  confirmText: '확인',
  cancelText: '취소',
  showClose: true,
  useFooter: true
})
const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

const modalShow = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const calculateModalWidth = computed(() => {
  if (props.size === MODAL_SIZE.SMALL)
    return 'var(--modal-width-sm)'
  else if (props.size === MODAL_SIZE.MEDIUM)
    return 'var(--modal-width-md)'
  else if (props.size === MODAL_SIZE.LARGE)
    return 'var(--modal-width-lg)'
  else if (props.size === MODAL_SIZE.XLARGE)
    return 'var(--modal-width-xl)'
})

const cancel = () => {
  emit('cancel')
}

const confirm = () => {
  emit('confirm')
}
</script>

<template>
  <el-dialog v-model="modalShow" :close-on-click-modal="closeOnClickModal" :width="calculateModalWidth" align-center
    destroy-on-close :show-close="showClose" class="popup">
    <template v-if="title.length" #header>
      <h2>{{ title }}</h2>
    </template>
    <slot name="content" />

    <template #footer>
      <slot name="footer" v-if="useFooter">
        <button type="button" class="btn__negative--md" @click="cancel">
          {{ props.cancelText }}
        </button>
        <button type="button" class="btn__secondary--md" @click="confirm">
          {{ props.confirmText }}
        </button>
      </slot>
    </template>
  </el-dialog>
</template>

<style scoped></style>
