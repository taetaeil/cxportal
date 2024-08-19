
export interface ISelectProps<T> {
  options: T[]
  size?: 'sm' | 'md' | 'lg'
  clearable?: boolean
  multiple?: boolean
  disabled?: boolean
  placeholder?: string
  modelValue?: string | number | string[] | number[]
}

export interface ITreeSelectProps<T> {
  treeData: T[]
  renderAfterExpand?: boolean
  showCheckbox?: boolean
  checkStrictly?: boolean
  multiple?: boolean
  placeholder?: string
  modelValue?: string | number | string[] | number[]

}

export interface ITree<T> {
  children?: T[]
  disabled?: boolean
}

export interface IOptions {
  value: string | number
  label: string
  disabled?: boolean
}
