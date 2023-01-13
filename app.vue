<template>
  <NuxtLayout />
</template>


<script setup>
import { useRoutesStore } from '@/store/routes'

const routeStore = useRoutesStore();

watch(useRoute(), (newRoute) => {
  routeStore.setPath(newRoute.path)
})

</script>

<style>
body {
  background: var(--color-primary);
}
</style>