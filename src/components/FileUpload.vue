<script setup lang="ts">
import { IUploadProps } from '../examples/types/upload.ts'

const dropZoneRef = ref<HTMLDivElement>()
const attachedFiles = ref<File[]>([])
const fileRef = ref<HTMLInputElement | null>(null)
const files = ref<[]>([])

const props = withDefaults(defineProps<IUploadProps>(), {
  show: true,
  file: []
})
const emit = defineEmits<{
  (e: 'file-change', file: File[]): void
}>()

const onDrop = (files: File[] | null, event: DragEvent) => {
  if (files) {
    uploadFile(event, files)
  }
}
useDropZone(dropZoneRef, {
  onDrop,
  // dataTypes: ['application/pdf', 'application/vnd.hancom.hwp', 'application/haansofthwp', 'application/x-hwp', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
})
const openFileUpload = (e: Event) => {
  if (fileRef.value !== null)
    fileRef.value.value = ''
  if (!fileRef.value)
    return e.preventDefault()
  fileRef.value.click()
}

const setFileName = () => {
  attachedFiles.value.forEach((file, index) => {
    const fullName = file.name
    const lastDotIndex = fullName.lastIndexOf('.')
    const fileName = fullName.slice(0, lastDotIndex)
    const fileExtension = fullName.slice(lastDotIndex + 1)
    const fileUrl = URL.createObjectURL(file)
    attachedFiles.value[index] = Object.assign(file, { fileName, fileExtension, fileUrl })
  })
}

const uploadFile = (e: Event | DragEvent, dropFile?: File[]) => {
  const target = e.target as HTMLInputElement
  const files = dropFile || Array.from(target.files)

  if (!files)
    return

  attachedFiles.value = files as any
  setFileName()
  emit('file-change', attachedFiles.value)
}

const removeFile = (fileIndex: number) => {
  attachedFiles.value.splice(fileIndex, 1)
  emit('file-change', attachedFiles.value)
}

onMounted(() => {
  if (props.file) {
    attachedFiles.value = props.file
    setFileName()
  }
})
</script>

<template>
  <div class="form__upload">
    <div v-if="props.show" ref="dropZoneRef" class="form__upload-area">
      <button type="button" @click="openFileUpload">
        <icon name="file__line--bbb" width="32" height="32" alt="파일첨부" />
      </button>
      <p class="mt-2">파일을 드래그 앤 드롭 하거나 클릭하여 업로드 하세요</p>
      <input id="file-upload" ref="fileRef" type="file" style="display: none;" multiple @change="uploadFile">
    </div>
    <template v-if="attachedFiles.length > 0">
      <div class="form__upload--file" v-for="(file, index) in attachedFiles" :key="index">
        <Icon class="mr-1" :name="`file__${file.fileExtension}`" :key="file.fileExtension" width="16" height="16" alt=""
          aria-hidden="true" />
        <a :href="file.fileUrl" :download="file.fileName">{{ file.fileName }}.{{ file.fileExtension }}</a>
        <button v-if="props.show" type="button" class="ml-2.5" @click="removeFile(index)">
          <Icon name="delete__circle--eae" width="16" height="16" alt="첨부파일 삭제" />
        </button>
      </div>
    </template>
  </div>
</template>
