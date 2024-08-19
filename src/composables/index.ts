import type { ElMessageBoxOptions } from 'element-plus'
import type { Component, VNode, VNodeArrayChildren, VNodeProps } from 'vue'

const CANCEL_MSG = 'cancel emitted'
const UNMOUNT_MSG = 'close without keyword emitted'
export function useReturnMessage() {
  const { appContext } = getCurrentInstance()!
  const showFromNode = <T>({ vNode, ...args }: ReturnMsgParams) =>
    new Promise<any>((resolve, reject) => {
      ElMessageBox({
        showCancelButton: false,
        showConfirmButton: false,
        showClose: false,
        closeOnClickModal: false,
        ...args,
        beforeClose: (action, instance, done) => {
          done()
        },
        message: () => {
          const node = h(vNode, {
            onSubmit: (data: T) => {
              resolve(data)
              if (node.component?.parent) {
                node.component.parent.emit('releaseRequested')
              }
              else {
                ElMessageBox.close()
              }
            },
            onCancel: () => {
              reject(new Error(CANCEL_MSG))
              if (node.component?.parent) {
                node.component.parent.emit('releaseRequested')
              }
              else {
                ElMessageBox.close()
              }
            },

            onVnodeBeforeUnmount(vNode) {
              reject(new Error(UNMOUNT_MSG))
            },
          })
          return node
        },
        customStyle: {
          width: args.width,
          maxWidth: args.width,
        },
      }, appContext).catch((e) => {
        if (e === 'cancel')
          return
      })
    })

  const showFromFile = <T>(p: IFromFile<T>) =>
    showFromNode<T>({
      vNode: h(p.component, p.props, p.children),
      ...p,
    })

  const catchNotError = (e: unknown) => {
    if (e instanceof Error && [CANCEL_MSG, UNMOUNT_MSG].includes(e.message))
      return
    throw e
  }

  return {
    showFromNode,
    showFromFile,
    catchNotError,
  }
}

interface ReturnMsgParams extends Omit<ElMessageBoxOptions, 'message'> {
  vNode: VNode
  width?: string
}

type RawProps = VNodeProps & {
  __v_isVNode?: never
  [Symbol.iterator]?: never
} & Record<string, any>

interface IFromFile<T> extends Omit<ReturnMsgParams, 'vNode'> {
  component: Component
  props?: RawProps & T
  children?: RawChildren | RawSlots
}
type RawChildren =
  | string
  | number
  | boolean
  | VNode
  | VNodeArrayChildren
  | (() => any)

interface RawSlots {
  [name: string]: unknown
  $stable?: boolean
  /* removed internal: _ctx */
  /* removed internal: _ */
}
