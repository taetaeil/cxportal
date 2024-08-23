<script setup lang="ts">
import type { IInputProps } from '../types/custom-input'

const props = withDefaults(defineProps<IInputProps>(), {
  modelValue: '',
  type: 'text',
  width: '100%',
  maxLength: '',
  placeholder: '',
  readonly: false,
  disabled: false,
  useBtn: false,
  useComma: false,
  useCount: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'blur'): void
  (e: 'keypressEnter'): void
  (e: 'focus'): void
}>()
const inputModelValueRef = ref<HTMLInputElement | null>(null)

const getInputType = computed(() => {
  if (props.type === 'text')
    return 'text'

  if (props.type === 'number')
    return 'text'
})

const getInputValue = (e: Event) => {
  const event = e.target as HTMLInputElement
  let formatValue: string | number = event.value
  if (props.type === 'number') {
    formatValue = onlyNumbers(event.value)
  }

  if (props.type === 'number' && props.useComma) {
    formatValue = convertThousandComma(event.value)
  }
  emit('update:modelValue', formatValue)
}

const focusInput = () => {
  inputModelValueRef.value?.focus()
}

defineExpose({
  focusInput,
})
</script>

<template>
  <div :style="{ width: `${props.width}` }" class="custom-input" :class="{ 'custom-input__btn': props.useBtn }">
    <input ref="inputModelValueRef" :value="modelValue" :type="getInputType" :readonly="props.readonly"
      :disabled="props.disabled" :maxlength="props.maxLength" :placeholder="props.placeholder" :title="modelValue"
      @blur="emit('blur')" @keypress.enter="emit('keypressEnter')" @focus="emit('focus')" @input="getInputValue">
    <button type="button" v-if="props.useBtn" :class="{ 'custom-input__btn--focus': modelValue }">
      <Icon name="search__line--999" width="20" height="20" alt="검색" />
      <Icon name="search__line--ec0" width="20" height="20" alt="" aria-hidden="true" />
    </button>
    <!-- <div v-if="props.useCount && props.maxLength">
        <em>{{ props.modelValue.toString().length }}</em>/<span>{{ props.maxLength }}</span>
      </div> -->
  </div>
</template>