<script setup lang="ts">
const noticeCont = ref(
  '공지사항이 여기에 전광판처럼 보여집니다.공지사항이 여기에 전광판처럼 보여집니다.공지사항이 여기에 전광판처럼 보여집니다.'
)

const userInfo = reactive({
  userNm: '홍길동',
  accessDate: '0000/00/00',
  accessTime: '00:00:00',
  teamNm: 'Consumer 부문'
})

const menuItems = reactive([
  { menuNum: 0, name: '문의콜', isActive: true },
  { menuNum: 1, name: '불만콜', isActive: false },
  { menuNum: 2, name: '통합 NPS', isActive: false },
  { menuNum: 3, name: 'J-NPS', isActive: false },
  { menuNum: 4, name: '고객의 소리', isActive: false }
])

const currentMenu = ref(0)

const setActive = (i: number) => {
  currentMenu.value = i
}
</script>

<template>
  <header class="header">
    <!-- Main Header -->
    <div class="main-header">
      <div class="main-header__inner">
        <div class="main-header__left">
          <h1 class="logo">
            <a href="/">
              <Icon name="logo" width="210" height="32" alt="LG U+ CX 통합포탈" />
            </a>
          </h1>
          <div class="main-header__board">
            <Icon name="loud-speaker__line--999" width="24" height="24" alt="공지사항" />
            <div class="main-header__board-wrap">
              <div class="main-header__board-content">
                {{ noticeCont }}
              </div>
            </div>
          </div>
        </div>
        <div class="main-header__right">
          <button type="button" class="main-header__search">
            <Icon name="search__line--333" width="24" height="24" alt="검색" />
          </button>
          <div class="main-header__user">
            <div class="main-header__user-wrap">
              <div class="main-header__user-detail">
                <em>{{ userInfo.userNm }}</em>
                <span>{{ userInfo.accessDate }}</span>
                <span>{{ userInfo.accessTime }}</span>
                <button type="button">
                  <Icon name="arrow-d__line--333" width="24" height="24" alt="펼치기" />
                </button>
              </div>
              <span> {{ userInfo.teamNm }} </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- GNB -->
    <nav class="gnb">
      <ul class="gnb__inner">
        <li
          v-for="menu in menuItems"
          :key="`gnb-menu-${menu.menuNum}`"
          :class="{ 'is-active': menu.menuNum === currentMenu }"
          @click="setActive(menu.menuNum)"
        >
          <a href="#">{{ menu.name }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
