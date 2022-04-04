export default function({axios, store, redirect}) {
  $axios.onError(error => {
    if (error.response.status === 401){
      store.dispatch('authentication/destroSession');
      return redirect ('/login')
      
    } else if (error.response.status === 404) {
      return redirect ('/')

    } else if (error.response.status === 404) {
      return redirect ('/')
    }
  })
}