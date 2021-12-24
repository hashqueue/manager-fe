<template>
  <div class="basic-layout">
    <!--    左侧菜单区域，根据isCollapse动态设置菜单区域的宽度  -->
    <div :class="['nav-side', isCollapse ? 'fold' : 'unfold']">
      <!--    logo区域-->
      <div class="logo">
        <img src="../assets/logo.png" alt="logo">
        <span>Manager</span>
      </div>
      <!--    导航菜单-->
      <el-menu
        :default-active="activateMenu"
        class="nav-menu"
        text-color="#fff"
        background-color="#001529"
        router
        :collapse="isCollapse"
        active-text-color="#409eff"
      >
        <tree-menu :user-menu-list="userMenuList" />
      </el-menu>
    </div>
    <!--    内容主体-->
    <div :class="['content-right', isCollapse ? 'fold' : 'unfold']">
      <div class="nav-top">
        <div class="nav-left-menu">
          <el-icon class="menu-fold" @click="toggle">
            <fold />
          </el-icon>
          <div class="bread">面包屑</div>
        </div>
        <div class="user-info">
          <el-badge :is-dot="true" class="notice" type="danger">
            <el-icon>
              <bell />
            </el-icon>
          </el-badge>
          <el-dropdown @command="handleUserLink">
            <span class="user-link">
              {{ userInfo.userName }}
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="email">邮箱：{{ userInfo.userEmail }}</el-dropdown-item>
                <el-dropdown-item command="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="wrapper">
        <div class="main-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TreeMenu from "./TreeMenu.vue";

export default {
  name: "Home",
  components: {
    TreeMenu
  },
  data() {
    return {
      activateMenu: location.hash.slice(1),
      isCollapse: false,
      userMenuList: null,
      userInfo: this.$store.state.userInfo
    };
  },
  created() {
    this.getMenuList();
  },
  methods: {
    // 控制左侧菜单展开或合并
    toggle() {
      this.isCollapse = !this.isCollapse;
    },
    // 处理用户信息区域的下拉菜单的点击事件
    handleUserLink(key) {
      if (key === "email") return;
      // 如果是退出操作 ===> 清空用户信息
      this.$router.push("/login");
      this.$store.commit("saveUserInfo", "");
    },
    getMenuList() {
      this.$api.getMenuList().then((res) => {
        this.userMenuList = res;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.basic-layout {
  //相对定位
  position: relative;

  .nav-side {
    // 设置菜单动态宽度(合并)
    &.fold {
      width: 64px;
    }

    // 设置菜单动态宽度(展开)
    &.unfold {
      width: 200px;
    }

    // 固定定位
    position: fixed;
    width: 200px;
    // 自动计算属性
    height: 100vh;
    background-color: #001529;
    color: #fff;
    // 自动出现滚动条
    overflow-y: auto;
    // 宽度变化动画效果0.5s
    transition: width .5s;

    .logo {
      display: flex;
      align-items: center;
      font-size: 18px;
      height: 50px;

      img {
        margin: 0 16px;
        width: 32px;
        height: 32px;
      }
    }

    .nav-menu {
      // 清除导航栏menu多出的1像素
      border-right: none;
    }
  }

  .content-right {
    // 设置菜单动态宽度(合并)
    &.fold {
      margin-left: 64px;
    }

    // 设置菜单动态宽度(展开)
    &.unfold {
      margin-left: 200px;
    }

    .nav-top {
      height: 50px;
      line-height: 50px;
      // 弹性布局
      display: flex;
      // 控制文本两端对齐
      justify-content: space-between;
      // 下边框
      border-bottom: 1px solid #ddd;
      padding: 0 20px;

      .nav-left-menu {
        display: flex;
        // 水平对齐
        align-items: center;
        // 导航栏中的合并按钮
        .menu-fold {
          margin-right: 15px;
          font-size: 30px;
        }

        .menu-fold:hover {
          background-color: #eef0f3;
        }
      }

      .user-info {
        .notice {
          line-height: 25px;
          margin-right: 15px;
        }

        .user-link {
          // 鼠标hover事件出现鼠标的小手效果
          cursor: pointer;
          // 字体颜色
          color: #409eff;
        }
      }
    }

    .wrapper {
      background: #eef0f3;
      padding: 20px;
      height: calc(100vh - 50px);
      // 主界面内容区域
      .main-content {
        background: #fff;
        height: 100%;
      }
    }
  }
}
</style>
