<script setup lang="ts">
const menuList = reactive([
  {
    menuId: 'Example',
    menuName: 'Example',
    menuIndex: '0',
    menuUrl: '/examples',
    disabled: false,
  },
])

const router = useRouter()

const movePage = (menuUrl: string) => {
  const newWebPageUrlRegex = /http(s)?:\/\/.+/
  if (newWebPageUrlRegex.test(menuUrl))
    window.open(menuUrl)
  else
    router.push(menuUrl)
}
</script>

<template>
  <aside class="sidebar">
    <h1 class="logo">
      <a href="#">CX portal</a>
    </h1>
    <el-menu>
      <template v-for="menu in menuList" :key="`mgmt-sidebar-${menu.menuId}`">
        <el-sub-menu v-if="menu.children" :index="menu.menuIndex">
          <template #title>
            <span>{{ menu.menuName }}</span>
          </template>
          <!-- 2depth -->
          <el-menu-item-group>
            <el-menu-item v-for="lowerMenu in menu.children" :key="`mgmt-sidebar-menu-lower-${lowerMenu.menuId}`"
              :index="lowerMenu.menuIndex" @click="movePage(lowerMenu.menuUrl!)">
              <span>{{ lowerMenu.menuName }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.menuIndex" @click="movePage(menu.menuUrl!)">
          <template #title>
            <span>{{ menu.menuName }}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </aside>
</template>

<style lang="scss"></style>
