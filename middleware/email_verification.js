export default function({store, redirect }){

  store.dispatch(authentication/retrieveLoggedUserInfo)
  .then(() => {
    if (store.state.user.email_verified === false){
      return redirect('verify_email');
    }
  })

}