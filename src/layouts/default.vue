<script setup lang="ts">
</script>

<template>
  <main class="layout">
    <layout-sidebar />
    <div class="containers">
      <layout-header />
      <div class="content">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
