import { userLogin, fetchUserAccess } from 'API'
import types from './mutations/types'

export default {
  userLogin ({ commit }, { username, password, vm }) {
    return userLogin({
      username,
      password
    })
      .then(res => {
        commit(types.SET_USERNAME, username)
        commit(types.SET_ACCESS_TOKEN, res.access_token)
        vm.toggleLoading(false)
        vm.$router.replace('/home')
      })
      .catch(e => {
        if (e.code === 5000) {
          vm.$messageBox({
            title: 'Error',
            message: 'Wrong username or password',
            type: 'error'
          })
        }
        console.error(`[Login error]: ${e.code}, ${e.msg}`)
      })
  },
  userLogout ({ commit }) {
    commit(types.SET_USERNAME, '')
    commit(types.SET_USER_ROLE, '')
    commit(types.SET_ACCESS_TOKEN, '')
    commit(types.SET_DYNAMIC_ROUTES, [])
    commit(types.SET_ALL_ROUTES, [])
    // https://github.com/PanJiaChen/vue-element-admin/issues/416
    // location.reload() is used to reset all dynamic routes.
    // All routes records should be synced with vuex-persistedstate.
    location.reload()
  },
  fetchUserAccess ({ commit }, username) {
    return fetchUserAccess({ username })
      .then(({ roles }) => {
        commit(types.SET_USER_ROLE, roles)
        return roles
      })
  }
}
