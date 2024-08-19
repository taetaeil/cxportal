<script setup lang="ts">
import Resumable from 'resumablejs'
import type { IFileList, IUploadOptions } from '~/types/upload.ts'

const props = withDefaults(defineProps<IUploadOptions>(), {
  uploadURL: '/upload',
  progressShown: false,
  pauseButtonShown: false,
  progressColor: '#1989fa',
  successColor: '#5cb87a',
  errorColor: '#f56c6c',
})

const emit = defineEmits<{
  (e: 'pause'): void
  (e: 'reUpload'): void
  (e: 'remove', files: Resumable.ResumableFile[]): void
  (e: 'fileAdded', files: Resumable.ResumableFile[]): void
  (e: 'fileProgress', files: Resumable.ResumableFile[]): void
  (e: 'fileSuccess', files: Resumable.ResumableFile[], response: string): void
  (e: 'fileError', files: Resumable.ResumableFile[], response: string): void
}>()

const fileList = ref<IFileList[]>([])
const isPause = ref<boolean>(false)

const resumable = new Resumable({
  target: props.uploadURL,
  chunkSize: import.meta.env.VITE_FILE_UPLOAD_CHUNK_SIZE,
})

const uploadFiles = (e: Event) => {
  const target = e.target as HTMLInputElement

  if (!target.files)
    return

  const filesArray = Array.from(target.files)
  resumable.addFiles(filesArray)
}

const clearFiles = (e: Event) => {
  const target = e.target as HTMLInputElement
  target.value = ''
}

// 파일 업로드 일시정지
const pauseUploadFiles = () => {
  isPause.value = resumable.isUploading()
  resumable.pause()

  emit('pause')
}

// 파일 업로드 재시작
const reUploadFiles = () => {
  isPause.value = resumable.isUploading()
  resumable.upload()

  emit('reUpload')
}

// 파일 업로드 삭제
const removeUploadFiles = (index: number) => {
  resumable.pause()
  resumable.removeFile(resumable.files[index])
  fileList.value.splice(index, 1)

  emit('remove', resumable.files)
}

// 파일 추가됨
resumable.on('fileAdded', (file) => {
  fileList.value.push({
    name: file.fileName,
    size: file.size,
    progress: 0,
    color: props.progressColor,
  })
  resumable.upload()

  emit('fileAdded', resumable.files)
})

// 파일 업로드 진행 중
resumable.on('fileProgress', (file) => {
  const index = resumable.files.findIndex(f => f === file)
  fileList.value[index].progress = Math.round(file.progress(true) * 100)

  emit('fileProgress', resumable.files)
})

// 파일 업로드 완료(file: Resumable.ResumableFile, response)
resumable.on('fileSuccess', (file: Resumable.ResumableFile, response: string) => {
  const index = resumable.files.findIndex(f => f === file)
  fileList.value[index].color = props.successColor

  emit('fileSuccess', resumable.files, response)
})

// 파일 업로드 오류(file, response)
resumable.on('fileError', (file, response) => {
  const index = resumable.files.findIndex(f => f === file)
  fileList.value[index].color = props.errorColor

  emit('fileError', resumable.files, response)
})
</script>

<template>
  <!-- Fixme pub: 사용 하게 된다면 아이콘 파일 수정하기, 현재 임시로 넣어둠 -->
  <div class="flex flex-col">
    <!-- 파일 업로드 버튼 -->
    <div class="mb-5">
      <label for="upload"
        class="flex justify-center items-center cursor-pointer w-20 border border-solid border-black py-1 rounded">
        <input id="upload" type="file" hidden multiple @change="uploadFiles" @click="clearFiles">
        <span class="bold">파일첨부</span>
      </label>
    </div>

    <div>
      <div class="w-1/3 flex justify-between items-cetner">
        <h3 class="text-lg mb-3">
          업로드 파일
        </h3>
        <div v-if="props.pauseButtonShown">
          <el-button v-if="isPause" type="info" @click="reUploadFiles">
            <Icon name="arrow-r__full--fff" width="18" height="20" />
          </el-button>
          <el-button v-else type="info" @click="pauseUploadFiles">
            <Icon name="info__line--555" width="18" height="20" />
          </el-button>
        </div>
      </div>

      <!-- 파일 업로드 목록 -->
      <ul>
        <li v-for="(file, index) in fileList" :key="file.name" class="mb-2">
          <div class="flex gap-2">
            <h4 class="font-medium">
              {{ file.name }}
            </h4>
            <span v-if="Math.round(file.size / 1024) < 1" class="text-gray-500">{{ Math.ceil(file.size) }}B</span>
            <span v-else class="text-gray-500">{{ Math.ceil(file.size / 1024).toLocaleString('ko-KR') }}KB</span>
            <span v-if="!props.progressShown">{{ file.progress }}%</span>
            <Icon v-if="file.progress === 100" name="check__full--333" width="18" height="20" />
            <Icon v-if="!props.progressShown" name="delete__circle--eae" width="18" height="20" class="cursor-pointer"
              @click="removeUploadFiles(index)" />
          </div>
          <div v-if="props.progressShown" class="h-6 flex items-center">
            <div class="w-1/3">
              <el-progress :percentage="file.progress" :color="file.color" />
            </div>
            <Icon name="delete__circle--eae" width="18" height="20" class="cursor-pointer"
              @click="removeUploadFiles(index)" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
