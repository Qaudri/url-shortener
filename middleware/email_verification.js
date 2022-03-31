export default function({store, redirect }){

  store.dispatch(authentication/retrieveLoggedUserInfo)
  .then(() => {
    if (store.state.authentication.user.email_verified === false){
      return redirect('verify_email');
    }
  })

}