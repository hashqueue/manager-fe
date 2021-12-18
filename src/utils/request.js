/**
 * axios二次封装
 */
import axios from 'axios'
import config from '../configs'
import { ElMessage } from 'element-plus'

// const TOKEN_INVALID = 'Token认证失败, 请重新登录.'
const NETWORK_ERROR = '网络请求异常, 请稍后重试.'

const service = axios.create({
  baseURL: config.baseApi,
  // 超时时间8秒
  timeout: 8000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  (requestConfig) => {
    // TODO
    // const headers = requestConfig.headers
    // if (!headers.Authorization) headers.Authorization = 'Bearer ey'
    return requestConfig
  },
  (error) => {
    console.log(error)
    ElMessage.error(error.message || '请求接口时出现未知错误')
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  (response) => {
    // console.log(response)
    const { code, data, message } = response.data
    if (code === 20000) {
      ElMessage.success(message)
      return data
    } else {
      ElMessage.error(message || NETWORK_ERROR)
      return Promise.reject(message || NETWORK_ERROR)
    }
  },
  (error) => {
    // console.log(Object.keys(error))
    // console.log(error.config)
    // console.log(error.request)
    // console.log(error.response)
    // console.log(error.isAxiosError)
    // console.log(error.toJSON)
    console.log(error)
    ElMessage.error(error.response.data.message || error.message)
    return Promise.reject(error)
  }
)

/**
 * 接口请求函数
 * @param options 请求相关参数配置
 */
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.data
  }
  if (config.env === 'production') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
  }
  return service(options)
}

export default request
