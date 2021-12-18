module.exports = {
  env: {
    node: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // 关闭组件命名时的多单词大驼峰写法
    'vue/multi-word-component-names': 'off'
  }
}
