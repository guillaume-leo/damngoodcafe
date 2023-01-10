<template>
  <Header />
  <slot />
  <Footer />
</template>

<style lang="scss">

</style>

<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ]
})
</script>