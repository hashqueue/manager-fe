<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(breadItem, index) in breadList" :key="breadItem.path">
      <!--      设置只有面包屑中的首页可以被点击-->
      <router-link v-if="index === 0" :to="breadItem.path">{{ breadItem.meta.title }}</router-link>
      <span v-else>{{ breadItem.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>

export default {
  name: "BreadCrumb",
  computed: {
    breadList() {
      return this.$route.matched;
    }
  }
};
</script>

<style scoped>

</style>
