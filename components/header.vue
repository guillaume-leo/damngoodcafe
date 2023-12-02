<template>
  <nav
    :class="
      menuButton?.state
        ? 'navbar navbar--phone navbar--open'
        : 'navbar navbar--phone'
    "
  >
    <BaseButtonIcon
      ref="menuButton"
      :class="
        menuButton?.state
          ? 'navbar__button navbar__button--close'
          : 'navbar__button'
      "
      :src="menuButton?.state ? CloseIcon : HamburgerIcon"
      :size="menuButtonSize"
      @clicked="onclick"
    />
    <ul v-show="menuButton?.state" class="navbar__links links">
      <li class="links__link links__link--home">
        <BaseLinkIcon
          @click="closeMenu"
          :src="DamnGoodLogo"
          size="100"
          url="/"
          alt="home page"
        />
      </li>

      <li class="links__link">
        <BaseLink @click="closeMenu" url="/about" text="about" />
      </li>
      <li class="links__link">
        <BaseLink @click="closeMenu" url="/menu" text="menu" />
      </li>
      <!-- <li class="links__link">
        <BaseLink url="/shop" text="shop" />
      </li> -->
      <li class="links__link">
        <BaseLink @click="closeMenu" url="/contact" text="contact" />
      </li>
    </ul>
  </nav>
</template>

<script setup>
import HamburgerIcon from "/src/img/hamburger.png";
import CloseIcon from "/src/img/close.png";
import DamnGoodLogo from "/src/img/logo.png";

import { useRoutesStore } from "~~/store/routes";
import { useNavbarStore } from "~~/store/navbar";

const menuButton = $ref(null);
const menuButtonSize = $ref("50");

const { path } = storeToRefs(useRoutesStore());
const navbatStore = useNavbarStore();

watch(path, () => {
  menuButton.state = false;
});

const closeMenu = () => {
  setTimeout(() => {
    navbatStore.setOpen(false);
    menuButton.state = false;
  }, 100);
};

const onclick = (val) => navbatStore.setOpen(val);
</script>

<style scoped>
.navbar {
  /* position: fixed; */
  /* top: 0; */
  /* bottom: 0; */
  min-height: fit-content;
  min-width: 100%;
  display: none;
  flex-direction: column;
  background-color: hsla(var(--hsl-primary) / 0%);
  padding: 7px;
  z-index: 1;
  user-select: none;
}

@media screen and (max-width: 1000px) {
  .navbar--phone {
    display: flex;
    position: sticky;
    top: 0;
    background-color: var(--color-primary);
  }
}

.navbar--open {
  min-height: 100%;
  background-color: hsla(var(--hsl-primary) / 40%);
  backdrop-filter: blur(10px);
}

.navbar__button {
  margin-inline-start: auto;
}

.navbar__button--close {
  filter: invert(100%);
}

.links {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-block-start: 200px;
  flex-grow: 1;
  color: var(--color-white);
  font-size: 35px;
}

.links__link {
  margin-inline: auto;
}

.links__link--home {
  max-width: 100px;
  position: absolute;
  top: 7px;
  filter: invert(100%);
  filter: drop-shadow(0 0 0.75rem var(--color-white));
}
</style>
