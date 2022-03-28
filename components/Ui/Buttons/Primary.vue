<template>
  <div>
    <button class="px-6 py-2 text-lg text-black hover:text-white font-medium hover:bg-primary-100 border-2 
    hover:border-primary-100 border-black rounded-lg duration-500 ease-in-out">
      {{button_title}}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    button_title: String
  }
}
</script>

<style>

</style>