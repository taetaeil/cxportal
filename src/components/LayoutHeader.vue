<script setup lang="ts"></script>

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
            <Icon name="loud-speaker__line--999" width="24" height="24" alt="" aria-hidden="true" />
            <div class="main-header__board-wrap">
              <div class="main-header__board-content">
                공지사항이 여기에 전광판처럼 보여집니다.공지사항이 여기에 전광판처럼
                보여집니다.공지사항이 여기에 전광판처럼 보여집니다.
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
                <em>홍길동</em>
                <span>0000/00/00</span>
                <span>00:00:00</span>
                <button type="button">
                  <Icon name="arrow-d__line--333" width="24" height="24" alt="펼치기" />
                </button>
              </div>
              <span> Consumer 부분 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- GNB -->
    <nav class="gnb">
      <ul>
        <li class="is-active"><a href="">문의콜</a></li>
        <li><a href="">불만콜</a></li>
        <li><a href="">고객의 소리</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
