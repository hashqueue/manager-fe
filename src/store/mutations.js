/**
 * Mutations业务层数据提交
 */
import storage from '@/utils/storage'

export default {
  // 用户登录后保存用户信息
  saveUserInfo(state, userInfo) {
    state.userInfo = userInfo
    storage.setItem('userInfo', userInfo)
  }
}
