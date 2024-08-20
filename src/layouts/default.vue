<script setup lang="ts"></script>

<template>
  <main class="layout">
    <layout-header />
    <section class="wrapper">
      <layout-sidebar />
      <div class="content">
        <router-view />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
