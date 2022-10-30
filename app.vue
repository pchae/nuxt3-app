<template>
  <NuxtPage />
</template>

<script setup>
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
  window.scrollTo(0, 0)
})
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transition: all 0.2s;
  }
</style>