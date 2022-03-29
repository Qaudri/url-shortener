<template>
  <div>
    <a href="/signup" class="px-6 py-2 text-lg text-black hover:text-white font-medium hover:bg-primary-100 border-2 
    hover:border-primary-100 border-black rounded-2xl duration-500 ease-in-out">
      {{button_title}}
    </a>
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