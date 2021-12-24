<template>
  <!--  递归渲染子菜单-->
  <template v-for="menu in userMenuList" :key="menu._id">
    <el-sub-menu v-if="menu.children && menu.children.length > 0 && menu.children[0].menuType == 1" :index="menu.path">
      <template #title>
        <!--        <el-icon>-->
        <!--          <setting />-->
        <!--        </el-icon>-->
        <!--        TODO: element-plus更换了新图标，这里需要同步更新为新的图标引入方式  -->
        <i :class="menu.icon"></i>
        <span>{{ menu.menuName }}</span>
      </template>
      <tree-menu :user-menu-list="menu.children" />
    </el-sub-menu>
    <el-menu-item v-else-if="menu.menuType == 1" :index="menu.path">{{ menu.menuName }}</el-menu-item>
  </template>

</template>

<script>
export default {
  name: "TreeMenu",
  props: {
    userMenuList: {
      // 类型为数组
      type: Array,
      // 默认值为空数组
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>

</style>
