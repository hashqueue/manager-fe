import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import storage from './utils/storage'

// console.log('env', import.meta.env)
const app = createApp(App)
app.config.globalProperties.$storage = storage
app.use(router).use(ElementPlus).mount('#app')
