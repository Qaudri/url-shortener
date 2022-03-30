<template>
  <div class="w-full mx-12 md:w-1/2 lg:w-2/5  border-primary-100 border-2 py-8 px-6 rounded-2xl">

    <form action="" class="block" @submit.prevent="submitForm">

      <label for="username" class="block text-lg text-primary-100 font-medium">Verify your email</label>
      <div class="py-1"></div>
      <input type="email" v-model="form.username" placeholder="Enter the 6 digit verification code" 
      class="block w-full py-2 px-4 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <UiButtonsTertiary button_text="Verify Email" class="bg-opacity-5 mt-10 text-xl text-black font-medium py-3 flex justify-center bg-primary-100 w-full" />

    </form>
    
  </div>
  

</template>

<script>
export default {

}
</script>

<style>

</style>