<template>
  <div class="basic-layout">
    <div class="nav-side"></div>
    <div class="content-right">
      <div class="nav-top">
        <div class="bread">面包屑</div>
        <div class="user">用户</div>
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
export default {
  name: "Home"
};
</script>

<style lang="scss">
.basic-layout {
  //相对定位
  position: relative;

  .nav-side {
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
  }

  .content-right {
    margin-left: 200px;

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
