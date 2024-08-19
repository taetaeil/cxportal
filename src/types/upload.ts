export interface IFileList {
  name: string
  size: number
  progress: number
  color: string
}

export interface IUploadOptions {
  file: any[]
}

export interface IUploadProps {
  show: boolean
  file: File[]
}