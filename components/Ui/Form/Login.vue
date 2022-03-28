<template>
  <div class="w-1/3 h-60 bg-primary-100 bg-opacity-5 border-primary-100 border-2 py-10 px-6 rounded-3xl">
    <form action="" class="block">
      <label for="username" class="block">Username</label>
      <input type="text" placeholder="Enter your username" class="block">

      <label for="password" class="block">Password</label>
      <input type="text" placeholder="Enter your password" class="block">

      <div class="flex justify-between items-center">
        <input type="checkbox" name="toggle" id="toggle" >
        <p>
          Forgot password?
        </p>
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