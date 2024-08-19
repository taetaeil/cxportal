export interface IFileUploaded {
  name: string
  type: string
  url: string
}

export type NotNullable<T> = T extends null | undefined ? never : T
export type Concrete<Type> = {
  [Key in keyof Type]-?: NotNullable<Type[Key]>
}
export type PromiseType<T> = T extends Promise<infer U> ? U : never
export type PromiseReturnType<T extends (...args: any) => Promise<any>> =
  PromiseType<ReturnType<T>>
