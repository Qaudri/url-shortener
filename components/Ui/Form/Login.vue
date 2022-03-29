<template>
  <div class="w-full mx-12 md:w-1/2 lg:w-1/3  border-primary-100 border-2 py-8 px-6 rounded-2xl">
    <form action="" class="block">
      <label for="username" class="block text-lg text-primary-100 font-medium">Username</label>
      <div class="py-1"></div>
      <input type="text" placeholder="Enter your username" class="block w-full py-2 px-5 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

      <div class="py-2"></div>

      <label for="password" class="block text-lg text-primary-100 font-medium">Password</label>
      <div class="py-1"></div>
      <input type="text" placeholder="Enter your password" class="block w-full py-2 px-5 rounded-lg bg-primary-100 bg-opacity-5 focus:border-primary-100">

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

      <button type="submit" class="bg-opacity-5 mt-10 text-xl text-black font-medium py-3 flex justify-center bg-primary-100 rounded-xl w-full">
        Login 
      </button>

      <div class="text-gray-400 text-base mt-4 flex justify-center mx-auto">
        Don't have an account? <span class=""><button class="font-medium hover:text-primary-100 duration-500 ease-in-out">Sign Up</button></span>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>