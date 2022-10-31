<template>
  <NuxtPage />
</template>

<script setup>
  const route = useRoute();
  const firstVisit = ref(true);

  watch(
    route,
    (n) => {
      if (process.client) {
        if (firstVisit.value) {
          firstVisit.value = false;
          return;
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    { deep: true, immediate: true }
  );
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.3s;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    transition: all 0.3s;
  }
</style>