export default function({store, redirect }){
  if (!store.authentication.getters.session){
    return redirect('login');
  }
}