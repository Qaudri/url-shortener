<template>
  <div class="relative">
    <div class="flex py-4 absolute top-0 px-16 bg-white w-full justify-between shadow-xl">
      <a href="/dashboard">
        <img :src=" require('@/Assets/images/logo.svg') " alt="" class="w-28">
      </a>

      <div class="flex">
        <div class="mx-4 flex items-center border-r-2 px-4">
          <img :src=" require('@/Assets/icons/user.svg') " class="w-8 mx-3" alt="">
          <form action="" class="">
            <select name="account" id="account" class="font-medium text-black text-lg pr-6">
              <option value="1" class="">Username</option>
              <option value="2" class="">Upgrade </option>
              <option value="3" class="">Resources</option>
              <option value="4" class="">Settings</option>
              <option value="5" class="">Log Out</option>
            </select>
          </form>
        </div>

        <form action="">
          <select name="links" id="links" class="px-4 py-3 text-black text-lg font-medium bg-primary-100 bg-opacity-5 rounded-lg" >
            <option value="1" class="bg-white">Check all your links</option>
            <option value="2" class="bg-white">Custom links</option>
            <option value="3" class="bg-white">Create a campaign</option>
            <option value="4" class="bg-white">Create a new link</option>
            <option value="5" class="bg-white">Help center</option>
          </select>
        </form>
      </div>
    </div>
    <div class="flex h-screen">
      <div class="w-1/5 bg-primary-100 bg-opacity-5 h-full border-r-2 border-purple-600 border-opacity-50 flex items-center">

        <div class="w-full">
          <div class="flex items-center py-2 border-b-2 border-purple-600 border-opacity-50 w-full my-2">
          <div class="mx-8 p-3 rounded-full border-2 border-primary-100 border-opacity-50">
            <img :src="require('@/Assets/icons/chart.svg') " class="w-8" alt="">
          </div>
          <div>
            <h1 class="font-bold text-5xl text-black my-1">
              0
            </h1>
            <p class="font-normal text-base text-gray-400">Total Clicks</p>
          </div>
          </div>

          <div class="flex items-center py-2 border-b-2 border-purple-600 border-opacity-50 w-full my-2">
            <div class="mx-8 p-3 rounded-full border-2 border-primary-100 border-opacity-50">
              <img :src="require('@/Assets/icons/browser.svg')" class="w-8" alt="">
            </div>
            <div>
              <h1 class="font-bold text-5xl text-black my-1">
                0
              </h1>
              <p class="font-normal text-base text-gray-400">Top referrer</p>
            </div>
          </div>

          <div class="flex items-center py-2 border-b-2 border-purple-600 border-opacity-50 w-full my-2">
            <div class="mx-8 p-3 rounded-full border-2 border-primary-100 border-opacity-50">
              <img :src="require('@/Assets/icons/location.svg') " alt="" class="w-8">
            </div>
            <div>
              <h1 class="font-bold text-5xl text-black my-1">
                0
              </h1>
              <p class="font-normal text-base text-gray-400">Top location</p>
            </div>
          </div>

        </div>


      </div>
      <div class="w-3/5 flex items-center justify-center mx-auto">
        <div class="w-full">
          <h1 class="font-bold text-5xl text-primary-100 text-center mx-auto my-6">Shorten your links</h1>
          <input type="text" class="w-11/12 px-6 py-3 text-lg text-gray-400 rounded-xl border-2 border-primary-100 shadow-lg" placeholder="Input your link">

          <UiButtonsTertiary button_text="Shorten" class="uppercase mt-4 flex justify-center mx-auto
          py-3 px-14" />

          <p class=" text-sm text-gray-400 flex justify-center italic mt-3">By clicking SHORTEN, you are agreeing to Ubit's Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters} from 'vuex';

export default {
  middleware: ['session', 'email_verification'],

}
</script>

<style>

</style> 