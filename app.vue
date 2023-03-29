<template>
  <NuxtLayout />
</template>


<script setup>
import { useRoutesStore } from '@/store/routes'
import { useMenuStore } from '@/store/menu';

const routeStore = useRoutesStore();
const menuStore = useMenuStore();

menuStore.getMenu()

watch(useRoute(), (newRoute) => {
  routeStore.setPath(newRoute.path)
})

</script>

<style>
body {
  background: var(--color-primary);
}
</style>