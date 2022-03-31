export default function({store, redirect }){

  store.dispatch(authentication/retrieveLoggedUserInfo)

  // if (!store.state.authentication.session_token){
  //   return redirect('login');
  // }
}