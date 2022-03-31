
export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
  user: {

  },
})

export const getters = {
  session(state) {
    return state.session_token != null 
  },

  isUnauthenticated(state){
    return state.auth_status
  }
}

export const actions = {
  tryLogin(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/user/auth/login', {
        email: credentials.email,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_SESSION_TOKEN', response.data.token)
          context.commit('SET_AUTHENTICATION_STATUS', true)
          localStorage.setItem('ubit_user_session_token', response.data.token)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  tryRegistration(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$post('/api/user/auth/register', {
        email: credentials.email,
        username: credentials.username,
        password: credentials.password
      })
        .then(response => {
          context.commit('SET_SESSION_TOKEN', response.data.token)
          context.commit('SET_AUTHENTICATION_STATUS', true)
          localStorage.setItem('ubit_user_session_token', response.data.token)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  retrieveLoggedUserInfo(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('/api/user/account')
        .then(response => {
          context.commit('SET_USER_INFO', response.data)
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },
}

export const mutations = {
  SET_SESSION_TOKEN(state, payload){
    state.session_token = payload
  },

  SET_AUTHENTICATION_STATUS(state, payload){
    state.auth_status = payload
  },

  SET_USER_INFO(state, payload){
    state.user = payload
  }
}