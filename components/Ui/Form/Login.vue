<template>
  <div class="w-full mx-12 md:w-1/2 lg:w-2/5  border-primary-100 border-2 py-8 px-6 rounded-2xl">

    <form action="" class="block" @submit.prevent="submitLogin">

      <label for="username" class="block text-lg text-primary-100 font-medium">Username</label>
      <div class="py-1"></div>
      <input type="text" v-model="form.username" placeholder="Enter your username" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <UiAuthenticationsInputErrorUsername v-if="errors.username" />

      <div class="py-2"></div>

      <label for="password" class="block text-lg text-primary-100 font-medium">Password</label>
      <div class="py-1"></div>
      <input type="password" v-model="form.password" placeholder="Enter your password" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <UiAuthenticationsInputErrorPassword v-if="errors.password" />

      <div class="py-1"></div>

      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <input type="checkbox" name="toggle" id="toggle" class="mr-3">
          <label for="toggle" class="text-sm text-gray-400 select-none">Remember Me</label>
        </div>
        <p  class="text-sm text-gray-400 select-none">
          Forgot password?
        </p>
      </div>

      <!-- <UiAuthenticationsCountErrorsPassword /> -->

      <button type="submit" class="bg-opacity-5 mt-10 text-xl text-black font-medium py-3 flex justify-center bg-primary-100 rounded-xl w-full">
        Login 
      </button>

      <div :class="errors.username && errors.password ? '' : 'bg-opacity-100 text-white'" class="text-gray-400 text-base mt-4 flex justify-center mx-auto">
        Don't have an account? <span class=""><button class="font-medium hover:text-primary-100 duration-500 ease-in-out ml-2">Sign Up</button></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      errors: {
        username: false,
        password: false
      },

      empty: {
        username: false,
        password: false
      },

      form: {
        username: '',
        password: '',
      },

      user_from_db: {
        usernameInput: "Qaudri",
        passwordInput: "Qaudri1234",
      },
    }
  },

  methods: {
    validateInput(){
      if (this.form.username == '') {
        this.empty.username = true
      }

      if (this.form.password == '') {
        this.empty.password = true
      }
    },

    submitLogin(){
      if (this.form.username == this.user_from_db.usernameInput) {

        if (this.form.password == this.user_from_db.passwordInput) {
          this.$router.push("/dashboard")
        } else {
          this.errors.password = true
        }

      } else {
        this.errors.username = true
      }
    }
  }
}
</script>

<style>

</style>