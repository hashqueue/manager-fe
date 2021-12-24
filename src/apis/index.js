import request from '../utils/request'

export default {
  /**
   * // 全局api管理
   */
  login(data) {
    return request({
      url: '/users/login',
      method: 'post',
      data: data,
      mock: true
    })
  },
  getMenuList() {
    return request({
      url: '/menu/list',
      method: 'get',
      data: {}
    })
  }
}
