import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import storage from './utils/storage'
import * as ElIcon from '@element-plus/icons-vue'
import api from './apis/index'
import store from './store'

// console.log('env', import.meta.env)
const app = createApp(App)
app.config.globalProperties.$storage = storage
app.config.globalProperties.$api = api
// 统一注册elementPlus icon图标
for (let iconName in ElIcon) {
  app.component(iconName, ElIcon[iconName])
}
app.use(router).use(ElementPlus).use(store).mount('#app')
