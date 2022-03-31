export default function({store, redirect }){

  store.dispatch('authentication/retrieveLoggedUserInfo')

}