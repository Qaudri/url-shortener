
export const state = () => ({
  session_token: process.browser ? localStorage.getItem('ubit_user_session_token') : null || null,
  auth_status: false,
  user: {

  },
  generated_link: ''
})

export const getters = {
  session(state) {
    return state.session_token != null 
  },

  isUnauthenticated(state){
    return state.auth_status
  },

  getShortenedLink(state){
    return state.link
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

          context.dispatch('retrieveLoggedUserInfo')

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
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token

      this.$axios.$get('/api/user/account')
        .then(response => {
          context.commit('SET_USER_INFO', response.data)

          if (response.data.email_verified === false) {
            this.app.router.push('verify')
          }
          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  resendVerificationCode(context) {
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token

      this.$axios.$get('/api/user/auth/email/resend_verification_code')
        .then(response => {

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  },

  verifyEmail(context, verification_code) {
    return new Promise((resolve, reject) => {

      this.$axios.$post('/api/user/auth/email/verify', {
        verification_code: verification_code
      })
        .then(response => {

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  }, 

  shortenURL(context, credentials) {
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token
      this.$axios.$post('/api/user/urls/', {
        url: credentials.url,
        slug: credentials.slug,

      })
        .then(response => {
          context.commit('SET_URL', response.data)
          context.dispatch('getShortURL')

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  }, 

  retrieveNewURL(context){
    return new Promise((resolve, reject) => {
      this.$axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.session_token

      this.$axios.$get('/api/user/account')
        .then(response => {
          context.commit('SET_URL', response.data)

          resolve(response)
        })

        .catch(function (error) {
          reject(error)
        })
    })
  }
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
  },

  SET_URL(state, payload){
    state.link = payload
  }
}