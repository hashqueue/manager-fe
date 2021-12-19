<template>
  <h1>欢迎</h1>
  <router-link to="/login">去登录</router-link>
</template>

<script>
// import request from "../utils/request";

export default {
  name: "Welcome",
  mounted() {
    // request({
    //   method: "post",
    //   url: "/auth/login/",
    //   data: {
    //     username: "username1",
    //     password: "username1"
    //   }
    // });
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
