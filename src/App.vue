<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$storage.clearItem('hah')
    this.$storage.setItem("userInfo", { "name": "java", "age": 32, "gender": "男", "hobbies": [1, 2, 3] });
  }
};
</script>

<style></style>
