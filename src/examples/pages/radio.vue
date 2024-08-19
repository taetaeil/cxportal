<script setup lang="ts">
const form = reactive({
  checkbox1: true,
  checkbox2: '',
  checkbox3: true,
  checkbox4: '',
  checkbox5: [''],
  radio: 'A',

})
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Selector
    </h2>
    <div class="flex flex-col gap-2 mt-10 p-10 bg-white rounded-3xl">
      <p><em class="font-bold">el-checkbox-group</em> 사용 시, <em class="font-bold">수직 정렬</em>됩니다.
      </p>
    </div>

    <!-- radio -->
    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        radio
      </mark>
      <form class="form content-box">
        <FormItem label="Basic">
          <el-radio-group v-model="form.radio">
            <el-radio value="A">
              A
            </el-radio>
            <el-radio value="B">
              B
            </el-radio>
          </el-radio-group>
        </FormItem>
        <FormItem label="Disabled">
          <el-radio-group v-model="form.radio" disabled>
            <el-radio value="A">
              A
            </el-radio>
            <el-radio value="B">
              B
            </el-radio>
          </el-radio-group>
        </FormItem>
      </form>
    </div>

    <div>
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        filter
      </mark>
      <form class="form content-box">
        <div class="custom-filter">
          <div class="tabs">
            <input type="radio" id="radio-1" name="tabs" checked="">
            <label class="tab" for="radio-1">전체</label>

            <input type="radio" id="radio-2" name="tabs">
            <label class="tab" for="radio-2">가치콜</label>

            <input type="radio" id="radio-3" name="tabs">
            <label class="tab" for="radio-3">관리콜</label>
            <span class="glider"></span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-filter {
  width: fit-content;

  input[type="radio"] {
    display: none;

    &:checked {
      &+label {
        // @include typo($font-weight: 500);
        font-weight: 700;
        color: var(--color-primary-800);
      }
    }

    @for $i from 1 through 5 {
      &:nth-of-type(#{$i}) {
        &:checked {
          &~.glider {
            $translate-value: (
              $i - 1) * 100%;
            transform: translateX($translate-value
            );
        }
      }
    }
  }
}

// input[id="radio-1"]:checked~.glider {
//   transform: translateX(0);
// }

// input[id="radio-2"]:checked~.glider {
//   transform: translateX(100%);
// }

// input[id="radio-3"]:checked~.glider {
//   transform: translateX(200%);
// }
}

.tabs {
  display: flex;
  position: relative;
  background: var(--color-gray-550);
  padding: 2px;
  border-radius: 56px;
  color: var(--color-white);
}

.tabs * {
  z-index: 2;
}

.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 50px;
  color: var(--color-white);
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.15s ease-in;
}

.glider {
  position: absolute;
  display: flex;
  height: 30px;
  width: 50px;
  background: var(--color-white);
  border: 2px solid var(--color-primary-800);
  z-index: 1;
  border-radius: 99px;
  transition: 0.25s ease-out;
}
</style>
