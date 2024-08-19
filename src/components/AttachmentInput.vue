<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue?: string
  inputState?: string
  textareaPlaceholder?: string
  textareaMaxLength?: number
  isAnswerContentTypingCompleted?: boolean
}>(), {
  textareaPlaceholder: '',
  textareaMaxLength: 200,
  isAnswerContentTypingCompleted: true,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'sendChatMessage'): void
  (e: 'updateIncreasedTextareaHeight', value: number): void
  (e: 'moveChatContentScroll'): void
}>()

const textValue = computed({
  get() {
    return props.modelValue
  },
  set(val: string) {
    emit('update:modelValue', val)
  },
})

const isDisabled = computed(() => props.inputState !== 'READY')
const containerDiv = ref<HTMLDivElement | null>(null)
const textareaRef = ref<HTMLTextAreaElement | null>(null)
const attachmentFile = ref<FileList | null>(null)
const originTextareaHeight = computed(() => {
  return textareaRef.value?.offsetHeight ?? 0
})

const prevContainerHeight = ref<number>(0)

// watch(() => textValue.value, () => {
//   prevContainerHeight.value = containerDiv.value!.clientHeight
// })

const resizeTextarea = () => {
  prevContainerHeight.value = containerDiv.value!.clientHeight
  if (textareaRef.value !== null) {
    const lineHeight = Number.parseInt(
      getComputedStyle(textareaRef.value).lineHeight,
    )

    const scrollHeight = textareaRef.value.scrollHeight
    const clientHeight = textareaRef.value.clientHeight

    const rowCount = textValue.value.split('\n').length

    if (scrollHeight > clientHeight) {
      // 7줄까지만 높이 높아지고, 그 후는 스크롤로 보이도록 적용
      if (rowCount <= 7 && rowCount > 1) {
        textareaRef.value.style.overflowY = 'hidden'
        textareaRef.value.style.height = 'auto'
        textareaRef.value.style.height = `${scrollHeight}px`
        emit('updateIncreasedTextareaHeight', Number(textareaRef.value!.style.height.replace('px', '')) - originTextareaHeight.value)
      }
      else {
        textareaRef.value.style.overflowY = 'auto'
      }
    }
    else if (scrollHeight === clientHeight && rowCount > 1) {
      // 높이 줄어드는 로직
      const newHeight = Math.max(
        originTextareaHeight.value,
        rowCount * lineHeight,
      )
      textareaRef.value.style.height = `${newHeight}px`
      emit('updateIncreasedTextareaHeight', Number(textareaRef.value!.style.height.replace('px', '')) - originTextareaHeight.value)
    }
  }
  emit('moveChatContentScroll')
}

const sendChatMessage = () => {
  emit('sendChatMessage')
  textValue.value = ''
  textareaRef.value!.style.height = `${originTextareaHeight.value}px`
  emit('updateIncreasedTextareaHeight', Number(textareaRef.value!.style.height.replace('px', '')) - originTextareaHeight.value)
}

const checkIsEmptyChatContent = () => {
  const cleanedText = textValue.value.replaceAll('\n', '')
  return cleanedText.length <= 0
}

const onTextareaKeyDown = (event: KeyboardEvent) => {
  if (event.isComposing) {
    event.stopPropagation()
    return
  }

  if (event.key === 'Enter' && !event.shiftKey) {
    if (checkIsEmptyChatContent()) {
      event.preventDefault()
    }
    else {
      event.preventDefault()
      sendChatMessage()
    }
  }
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  const files = event.dataTransfer?.files
  if (files && files.length > 0) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (textareaRef.value) {
        textareaRef.value.value = file.name
        textValue.value = file.name
      }
    }
    reader.readAsText(file)
  }
}

const handleAttachment = (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = input.files
  attachmentFile.value = files
  if (files && files.length > 0) {
    const file = files[0]
    const reader = new FileReader()
    reader.onload = () => {
      if (textareaRef.value) {
        textareaRef.value.value = file.name
        textValue.value = file.name
      }
    }
    reader.readAsText(file)
  }
}

</script>

<template>
  <div ref="containerDiv" class="chat__input">
    <textarea ref="textareaRef" v-model="textValue" :placeholder="textareaPlaceholder" :maxlength="textareaMaxLength"
      :disabled="isDisabled" @keydown="onTextareaKeyDown" @input="resizeTextarea" @drop="handleDrop" />
    <div class="chat__input-btn">
      <!-- 첨부파일 버튼 -->
      <label class="btn__file cursor-pointer">
        <input ref="fileInput" type="file" class="hidden" @change="handleAttachment">
        <!-- <icon name="clip__line--666" width="32" height="32" alt="첨부" /> -->
      </label>
      <!-- 전송 버튼 -->
      <button type="button" class="btn__send" :disabled="isDisabled || checkIsEmptyChatContent()"
        @click="sendChatMessage" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/pages/user-service-chat/chat'
</style>
