/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'production'
/**
 * 开发环境，测试环境，生产环境
 * @type {{development: {baseApi: string, mockApi: string}, test: {baseApi: string, mockApi: string}, production: {baseApi: string, mockApi: string}}}
 */
const envConfig = {
  development: {
    baseApi: '/api',
    mockApi: 'http://localhost:8080/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'http://localhost:8080/api'
  },
  production: {
    baseApi: '//test.futurefe.com/api',
    mockApi: 'http://localhost:8080/api'
  }
}

export default {
  env,
  mock: true,
  ...envConfig[env]
}
