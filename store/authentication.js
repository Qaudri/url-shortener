
export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
})

export const getters = {
  session(state) {
    return state.session != null 
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
}

export const mutations = {
  SET_SESSION_TOKEN(state, payload){
    state.session_token = payload
  },

  SET_AUTHENTICATION_STATUS(state, payload){
    state.auth_status = payload
  }
}