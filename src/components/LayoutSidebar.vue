<script setup lang="ts">
const sideMenuItems = reactive([
  {
    menuNum: 0,
    icoNm: 'chart',
    name: 'My View'
  },
  {
    menuNum: 1,
    icoNm: 'dashboard',
    name: 'Dashboard'
  },
  {
    menuNum: 2,
    icoNm: 'notes',
    name: '관리실적'
  },
  {
    menuNum: 3,
    icoNm: 'chat',
    name: '원문보기'
  },
  {
    menuNum: 4,
    icoNm: 'filter',
    name: '목표관리'
  }
])

const currentMenu = ref(0)

const setActive = (i: number) => {
  currentMenu.value = i
}
</script>

<template>
  <aside class="sidebar">
    <h2 class="logo--sm">
      <a href="/">
        <Icon name="logo--sm" width="72" height="30" alt="LG U+ CX 통합포탈" />
      </a>
    </h2>
    <div class="sidebar__menu">
      <ul>
        <li
          v-for="sideMenu in sideMenuItems"
          :key="`side-menu-${sideMenu.menuNum}`"
          :class="{ 'is-active': sideMenu.menuNum === currentMenu }"
          @click="setActive(sideMenu.menuNum)"
        >
          <Icon
            :name="`side-${sideMenu.icoNm}__full--${sideMenu.menuNum === currentMenu ? 'ec0' : 'fff'}`"
            width="24"
            height="24"
            alt=""
            aria-hidden="true"
          />
          <span>{{ sideMenu.name }}</span>
        </li>
      </ul>
      <div
        class="sidebar__bubble"
        :style="{ transform: `translateY(calc(var(--sidebar-width) * ${currentMenu}))` }"
        aria-hidden="true"
      ></div>
    </div>
  </aside>
</template>

<style lang="scss"></style>
