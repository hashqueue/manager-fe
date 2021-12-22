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
    mockApi:
      'https://www.fastmock.site/mock/a883cd7f48c399b721bedf1a963afaf7/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/a883cd7f48c399b721bedf1a963afaf7/api'
  },
  production: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/a883cd7f48c399b721bedf1a963afaf7/api'
  }
}

export default {
  env,
  mock: true,
  // localstorage存储数据的命名空间
  namespace: 'admin',
  ...envConfig[env]
}
