<template>
  <div>
    <a href="/login" class="duration-500 ease-in-outfont-medium text-lg text-black py-0.5 border-b-2 border-transparent hover:border-primary-100 hover:text-primary-100">
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