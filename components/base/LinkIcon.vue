<template>
  <NuxtLink :to="url" class="link">
    <img class="link__icon" :src="src" :alt="alt">
  </NuxtLink>
</template>

<script setup>

defineProps({
  url: String,
  src: String,
  alt: String,
  size: String
})

</script>

<style scoped>
.link {
  font-variant: small-caps;
  font-weight: 500;
  letter-spacing: 0.25em;
  max-width: v-bind(size + 'px');
}

.link:hover {
  text-decoration: underline;
}

.router-link-active {
  font-weight: 700;
}
</style>