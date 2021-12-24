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
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  test: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  },
  production: {
    baseApi: '//test.futurefe.com/api',
    mockApi:
      'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
  }
}

export default {
  env,
  mock: true,
  // localstorage存储数据的命名空间
  namespace: 'admin',
  ...envConfig[env]
}
