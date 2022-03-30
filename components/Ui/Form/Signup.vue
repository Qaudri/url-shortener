<template>
  <div class="w-full mx-12 md:w-1/2 lg:w-2/5  border-primary-100 border-2 py-8 px-6 rounded-2xl">

    <form action="" class="block" @submit.prevent="attemptSignUp">

      <label for="email" class="block text-lg text-primary-100 font-medium">Email</label>
      <div class="py-1"></div>
      <input type="email" v-model="form.email" placeholder="Enter your email" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <div class="py-2"></div>

      <label for="username" class="block text-lg text-primary-100 font-medium">Username</label>
      <div class="py-1"></div>
      <input type="username" v-model="form.username" placeholder="Choose a username" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">


      <div class="py-2"></div>

      <label for="password" class="block text-lg text-primary-100 font-medium">Password</label>
      <div class="py-1"></div>
      <input type="password" v-model="form.password" placeholder="Choose a password" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">



      <div class="py-1"></div>

      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <input type="checkbox" name="toggle" id="toggle" class="mr-3">
          <label for="toggle" class="text-sm text-gray-400 select-none">Remember Me</label>
        </div>

      </div>


      <UiButtonsTertiary button_text="Sign Up" class="bg-opacity-5 mt-10 text-xl text-black font-medium py-3 flex justify-center bg-primary-100 w-full" />

      <div  class="text-gray-400 text-base mt-4 flex justify-center mx-auto">
        Already have an account? <span class=""><UiButtonsSecondary button_title="Login" class="ml-2 text-sm" /></span>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  ...mapGetters ({
    sessions : 'authentication/session_token',
    auth_status: 'authentication/isUnauthenticated'
  }),

  data(){
    return{

      form: {
        username: '',
        email: '',
        password: '',
      },

    }
  },

  methods: {
        ...mapActions({
      tryRegistration : 'authentication/tryRegistration',

    }),

    attemptSignUp(){
      this.tryRegistration({
        email: this.form.email,
        password: this.form.password,
        username: this.form.username,

      })

      .then(() =>{
        this.$router.push({name: 'dashboard'})
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

        this.form.password = '';
      })
    }
  }
}
</script>

<style>

</style>