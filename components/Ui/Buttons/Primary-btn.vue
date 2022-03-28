<template>
  <div>
    <button class="px-4 py-2 text-lg text-black hover:text-white font-medium hover:bg-primary-100 border-2 
    border-primary-100 rounded-lg duration-500 ease-in-out">
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