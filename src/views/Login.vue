<template>
  <div class="login-wrapper">
    <div class="model">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginFormRules">
        <div class="title">后台管理系统</div>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text">
            <template #prefix>
              <el-icon class="el-input__icon">
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password">
            <template #prefix>
              <el-icon class="el-input__icon">
                <View />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-login" @click="submitForm('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginFormRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$api.login(this.loginForm).then((res) => {
            // 保存用户信息并跳转到首页
            this.$store.commit("saveUserInfo", res);
            this.$router.push("/welcome");
          });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login-wrapper {
  display: flex;
  // 水平方向居中
  justify-content: center;
  // 垂直方向居中
  align-items: center;
  background-color: #f9fcff;
  width: 100vw;
  height: 100vh;

  .model {
    width: 500px;
    // 内边距
    padding: 50px;
    background-color: #fff;
    // 边框
    border-radius: 4px;
    // 阴影
    box-shadow: 0 0 10px 3px #c7c9cb4d;

    .title {
      font-size: 40px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }

    .btn-login {
      width: 100%;
    }
  }
}
</style>
