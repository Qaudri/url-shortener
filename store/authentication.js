export const state = () => ({
  session: process.browser ? localStorage.getItem('ubit_user_session') : null || null,
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