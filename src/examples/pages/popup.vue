<script setup lang="ts">
// ================ modal ================
import type { MessageOptions } from 'element-plus'
import { MODAL_SIZE } from '../../types/modal'
import { openConfirm } from '../../composables/utils.ts'
import ExcelTempPopup from '../components/modal/ExcelTempPopup.vue'

// ================ Toast ================
import { IToastType } from '../../types/modal'
import type { IModalPopup } from '~/types/modal'
// import DepthModal from '../components/modal/DepthModal.vue'
import { openToast } from '../../composables/utils.ts'

// ================ confirm ================
const basicConfirm = {
  content: '삭제하시겠습니까?',
  confirmButtonText: '확인',
  cancelButtonText: '취소',
  center: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
}

const handleConfirm = () => {
  openConfirm(basicConfirm).then(() => {
  })
}
// ================ ref ==================
// TODO: Vue warn 방지
// const pickItem = ref('')

// ================ Modal ================
const excelTempPopup = ref(false)
const openExcelTempPopup = () => {
  excelTempPopup.value = true
}

const titleName = reactive({
  modalShow: 'basic',
  modalShowFooter: 'showFooter',
  modalShowTwoDepth: '2depth'
})

const popup: IModalPopup = reactive({
  modalShow: {
    show: false,
  },
  modalShowFooter: {
    show: false,
  },
  // modalShowTwoDepth: {
  //   show: false,
  // },
  modalShowList: {
    show: false,
  },
  excelTempPopup: {
    show: false,
  }
})

function openModal(modal: string) {
  popup[modal].show = true
}
function handleCancel(modal: string) {
  popup[modal].show = false
}
function handleConfirmBtn(modal: string) {
  popup[modal].show = false
}
// const handlePickItem = (data: any) => {
//   pickItem.value = data.date
// }

// ================ Toast ================
const options1: MessageOptions = {
  message: '일반 toast 예제입니다.',
  // type: undefined,
  showClose: true,
}

const options2: MessageOptions = {
  message: '주의 toast 예제입니다.',
  type: IToastType.WARNING,
  showClose: true,
}

const options3: MessageOptions = {
  message: '성공 toast 예제입니다.',
  type: IToastType.SUCCESS,
  showClose: false,
}

const options4: MessageOptions = {
  message: '오류 toast 예제입니다.',
  type: IToastType.ERROR,
  showClose: false,
}

const handleToast1 = () => {
  openToast(options1)
}

const handleToast2 = () => {
  openToast(options2)
}

const handleToast3 = () => {
  openToast(options3)
}

const handleToast4 = () => {
  openToast(options4)
}
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      popup
    </h2>
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Basic Modal
      </mark>
      <div class="flex gap-3">
        <button type="button" class="btn__primary--sm" @click="openModal('modalShow')">
          basic
        </button>
        <button type="button" class="btn__primary--sm" @click="openModal('modalShowFooter')">
          showFooter
        </button>
        <!-- <button type="button" class="btn__primary--sm" @click="openModal('modalShowTwoDepth')">
          2depth
        </button> -->
        <button type="button" class="btn__primary--sm" @click="openExcelTempPopup">
          엑셀 템플릿 관리 팝업
        </button>
      </div>

      <common-modal v-model="popup.modalShow.show" :title="titleName.modalShow" :size="MODAL_SIZE.MEDIUM"
        @confirm="handleCancel('modalShow')" @cancel="handleCancel('modalShow')">
        <template #content>
          <p>모달 내용</p>
        </template>
      </common-modal>

      <common-modal v-model="popup.modalShowFooter.show" :title="titleName.modalShowFooter" :size="MODAL_SIZE.XLARGE"
        @cancel="handleCancel('modalShowFooter')">
        <template #content>
          <p>모달 내용 </p>
        </template>
        <template #footer>
          <button type="button" class="btn__negative--md" @click="handleCancel('modalShowFooter')">
            취소(Footer)
          </button>
          <button type="button" class="btn__secondary--md" @click="handleConfirmBtn('modalShowFooter')">
            확인(Footer)
          </button>
        </template>
      </common-modal>

      <!-- <common-modal v-model="popup.modalShowTwoDepth.show" :title="titleName.modalShowTwoDepth"
        :size="MODAL_SIZE.XLARGE" @cancel="handleCancel('modalShowTwoDepth')">
        <template #content>
          <div class="form">
            <div class="form__item">

              <label class=" form__label">label</label>
              <CustomInput v-model="pickItem" max-length="10" placeholder="데이터가 들어감" size="sm" disabled />
            </div>
            <button type="button" class="btn__secondary--sm" @click="openModal('modalShowList')">
              Depth
            </button>
          </div>
          <DepthModal v-model="popup.modalShowList.show" title="타이틀" @confirm="handleConfirmBtn('modalShowList')"
            @cancel="handleCancel('modalShowList')" @pick-data="handlePickItem" />
        </template>
        <template #footer>
          <button type="button" class="btn__negative--md" @click="handleCancel('modalShowTwoDepth')">
            취소
          </button>
          <button type="button" class="btn__secondary--md" @click="handleConfirmBtn('modalShowTwoDepth')">
            확인
          </button>
        </template>
      </common-modal> -->

      <ExcelTempPopup v-model:model-value="excelTempPopup" />
    </div>
    <hr>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Confirm
      </mark>
      <div class="flex gap-3">
        <button type="button" class="btn__primary--md" @click="handleConfirm">
          basic
        </button>
      </div>
    </div>
    <hr>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Toast
      </mark>
      <div>
        <el-button @click="handleToast1">
          일반 toast
        </el-button>
        <el-button @click="handleToast2">
          주의 toast
        </el-button>
        <el-button @click="handleToast3">
          성공 toast
        </el-button>
        <el-button @click="handleToast4">
          오류 toast
        </el-button>
      </div>
    </div>
    <hr>
  </div>
</template>

<style scoped></style>
