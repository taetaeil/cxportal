export interface IInputProps {
  modelValue: string | number | undefined
  type?: 'text' | 'number' | 'password'
  size?: 'sm' | 'md' | 'lg'
  width?: string
  maxLength?: string
  prefixIcon?: string
  placeholder?: string
  validMessage?: string
  readonly?: boolean
  disabled?: boolean
  useShowPassword?: boolean
  useComma?: boolean
  useCount?: boolean
  useDelete?: boolean
}
