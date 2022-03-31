export default function({store, redirect }){
  if (!store.state.session_token){
    return redirect('login');
  }
}