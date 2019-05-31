import { userLogin, fetchUserAccess } from 'API'
import types from './mutations/types'
import router, { resetRouter } from 'ROUTER'
import { Notification } from 'element-ui'

export default {
  userLogin({ commit }, { username, password, vm }) {
    return userLogin({
      username,
      password
    })
      .then(({ user_id: userId, access_token: accessToken }) => {
        commit(types.SET_USER_INFO, {
          username,
          userId
        })
        commit(types.SET_ACCESS_TOKEN, accessToken)
        router.replace('/')
      })
      .catch(e => {
        if (e.code === 5000) {
          Notification.error({
            title: 'Error',
            message: 'Invalid username or password, please check them.',
            position: 'bottom-right',
            duration: 6000
          })
        }
        // 仅用于触发 afterEach 后置导航守卫，使得顶部进度条 done()
        // For invoking `router.afterEach` navigation guards including `NProgress.done()`
        vm.$router.replace('/login')
        console.error(`[Login error]: ${JSON.stringify(e)}`)
      })
  },
  userLogout({ dispatch }) {
    dispatch('resetStore', null, { root: true })
    // https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
    // remove all routes which was added by router.addRoutes()
    resetRouter()
  },
  fetchUserAccess({ commit }, token) {
    return fetchUserAccess(token).then(({ accesses }) => {
      commit(types.SET_USER_ACCESSES, accesses)
      return accesses
    })
  }
}
