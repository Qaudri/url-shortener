<template>
  <div class="w-full mx-12 md:w-1/2 lg:w-2/5  border-primary-100 border-2 py-8 px-6 rounded-2xl">

    <form action="" class="block" @submit.prevent="submitForm">

      <label for="username" class="block text-lg text-primary-100 font-medium">Verify your email</label>
      <div class="py-1"></div>
      <input v-model="verification_code" type="pin" placeholder="Enter the 6 digit verification code" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <UiButtonsTertiary button_text="Verify Email" class="bg-opacity-5 mt-10 text-xl text-black font-medium py-3 flex justify-center bg-primary-100 w-full" />

      <p>Didn't receive a code? <a @click="sendNewCode" href="">Resend</a></p>
    </form>
    
  </div>
  

</template>

<script>

import { mapActions, mapGetters} from 'vuex';

export default {
  middleware: 'sesstion',

  data(){
    return{
      verification_code: '',
    }
  },


  methods: {
    ...mapActions({
      resendCode: 'authentication/resendVerificationCode',
      verifyEmail: 'authentication/verifyUEmail'
    }),

    sendNewCode(){
      this.resendCode()
      .then(() =>{
        this.$toast.success("New email code has been sent to your email", {
          duration: 4000,        
        });
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });
      })
    },

    attemptVerification(){
      this.verifyEmail(this.verification_code)

      .then(() =>{
        this.$toast.success("Email verified successfully", {
          duration: 4000,        
        });

        this.$router.push({name: 'dashboard'})
        
      })

      .catch( error => {
        this.$toast.error(error.response.data.errors[Object.keys(error.response.data.errors)[0]][0], {
          duration: 4000,
        });

      })
    }
  },
}
</script>

<style>

</style>