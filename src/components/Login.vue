<template>
  <h1>登录</h1>
  <el-button type="primary" @click="goHome">回到欢迎界面</el-button>
</template>

<script>
export default {
  name: "Login",
  methods: {
    goHome() {
      this.$router.push('/welcome')
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
