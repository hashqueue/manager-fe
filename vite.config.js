import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 设置文件系统路径的别名
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8080
    // proxy: {
    //   '/api': 'http://beer.wenbin.org.cn'
    // }
  },
  plugins: [vue()]
})
