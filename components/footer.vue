<template>
  <div class="footer">
    <div class="footer__text">Rue Saint-Jean Népomucène 10, 1000 Bruxelles</div>
    <div class="footer__text">02.23.15.46.64</div>
  </div>
</template>

<style scoped>
.footer {
  min-height: 50px;
  display: grid;
  background-color: var(--color-primary);
  grid-template-rows: 1fr;
  place-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
