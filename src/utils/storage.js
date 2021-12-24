/**
 * 对浏览器存储localstorage封装
 */
import config from '@/configs'

export default {
  /**
   * localstorage根据key, value添加数据项
   * @param key
   * @param value
   */
  setItem(key, value) {
    let storage = this.getStorage()
    storage[key] = value
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  /**
   * localstorage根据key获取数据项
   * @param key
   * @returns {*}
   */
  getItem(key) {
    return this.getStorage()[key]
  },
  /**
   * 获取localstorage中某个命名空间的数据
   * @returns {string|string}
   */
  getStorage() {
    return JSON.parse(window.localStorage.getItem(config.namespace) || '{}')
  },
  /**
   * localstorage根据key删除对应的数据项
   * @param key
   */
  clearItem(key) {
    let storage = this.getStorage()
    delete storage[key]
    window.localStorage.setItem(config.namespace, JSON.stringify(storage))
  },
  /**
   * 清空localstorage数据
   */
  clearAll() {
    window.localStorage.clear()
  }
}
