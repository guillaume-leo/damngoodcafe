<template>
  <footer class="footer">
    <div class="footer__item">
      num de tel
    </div>
    <div class="footer__item">
      adresse
    </div>
  </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer {
  position: sticky;
  bottom: 0;
  width: inherit;
  background-color: hsla(var(--hsl-primary) / 80%);
  backdrop-filter: blur(2px);
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  min-height: 60px;
  border: solid 1px hsla(var(--hsl-tertiary) / 60%);
}
</style>

