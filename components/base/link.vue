<template>
  <NuxtLink :to="url" class="link">{{ text }}</NuxtLink>
</template>

<script setup>
defineProps({
  url: String,
  text: String,
});
</script>

<style scoped>
.link {
  margin: 10px;
  font-variant: small-caps;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.25em;
  color: var(--color-tertiary);
  filter: drop-shadow(0 0 0.7rem var(--color-tertiary-light));
}

.router-link-active {
  font-weight: 700;
  color: var(--color-white);
  filter: drop-shadow(0 0 0.75rem var(--color-gray-400));
}
</style>
