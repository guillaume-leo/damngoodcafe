<template>
  <NuxtLayout />
</template>

<script setup>
import { useMenuStore } from "@/store/menu";

const menuStore = useMenuStore();

menuStore.getMenu();
</script>

<style>
body {
  background: var(--color-primary);
}
</style>
