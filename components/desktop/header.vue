<template>
  <nav class="navbar navbar--desktop">
    <div
      v-show="routeStore.isNotHome"
      ref="homeLink"
      class="navbar__link navbar__link--home"
    >
      <BaseLinkIcon :src="DamnGoodLogo" size="100" url="/" alt="home page" />
    </div>

    <div class="navbar__link">
      <BaseLink url="/about" text="about" />
    </div>
    <div class="navbar__link">
      <BaseLink url="/menu" text="menu" />
    </div>
    <!-- <div class="navbar__link">
      <BaseLink url="/shop" text="shop" />
    </div> -->
    <div class="navbar__link">
      <BaseLink url="/contact" text="contact" />
    </div>
  </nav>
</template>

<script setup>
import DamnGoodLogo from "/src/img/logo.png";

import { useRoutesStore } from "~~/store/routes";

const homeLink = $ref(null);
const routeStore = useRoutesStore();
const { path } = storeToRefs(routeStore);

watch(path, (newPath) => {
  console.log(newPath);
});
</script>

<style scoped>
.navbar {
  display: none;
  max-height: 200px;
  min-width: 100%;
  background-color: hsla(var(--hsl-primary) / 100%);
  user-select: none;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 1000px) {
  .navbar--desktop {
    display: flex;
  }
}

.navbar__link {
  /* margin-inline: auto; */
  font-size: 25px;
}
.navbar__link--home {
  min-width: 50px;
  max-width: 100px;
}
</style>
