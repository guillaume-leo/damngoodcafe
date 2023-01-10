<template>
  <header class="header">
    <nav class="navbar">
      <NuxtLink to="/">Home page</NuxtLink>
      <NuxtLink to="/about">About Us</NuxtLink>
      <NuxtLink to="/menu">Menu</NuxtLink>
      <NuxtLink to="/webshop">Webshop </NuxtLink>
      <NuxtLink to="/contact">Contact </NuxtLink>
    </nav>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  width: inherit;
  background-color: hsla(var(--hsl-primary) / 90%);
  backdrop-filter: blur(4px);
  z-index: 2;
  border: solid 1px hsla(var(--hsl-tertiary) / 60%);
}

.navbar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding-block: 10px;
  min-height: 60px;
}
</style>

