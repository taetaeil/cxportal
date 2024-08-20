<script lang="ts" setup>
const value1 = ref(true)

const selectedServive = ref('')
const serviceList = [
  {
    label: '전체',
    value: 'all'
  },
  {
    label: '가치콜',
    value: 'value-call'
  },
  {
    label: '관리콜',
    value: 'mgmt-call'
  },
]
</script>

<template>
  <div class="p-20">
    <h2 class="text-3xl font-semibold">
      Switch
    </h2>

    <div class="my-10">
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        Basic
      </mark>
      <form class="form content-box">
        <el-switch v-model="value1" />
      </form>
    </div>
    <div>
      <mark class="inline-block mb-5 text-xl font-bold" style="background:#F0E4FF">
        filter
      </mark>
      <form class="form content-box">
        <div class="custom-switch">
          <div class="tabs">
            <template v-for="service in serviceList" :key="service">
              <input type="radio" :id="service.value" :value="service.value" name="tabs" v-model="selectedServive">
              <label class="tab" :for="service.value">{{ service.label }}</label>
            </template>
            <span class="glider">{{ selectedServive }}</span>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.custom-switch {
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
