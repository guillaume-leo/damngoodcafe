<script setup>
import { ref } from "vue";

const sheetID = "1zFHh6heEuu--3w6ajSBX3N3ULhkImZVD3WI4AlJWLyQ";
const qu = "SELECT *";

const url = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?&tq=${encodeURIComponent(
  qu
)}`;

let menuObj = ref({});

fetch(url)
  .then((response) => response.text())
  .then((data) => {
    const r = data.match(
      /google\.visualization\.Query\.setResponse\(([\s\S\w]+)\)/
    );
    if (r && r.length == 2) {
      const obj = JSON.parse(r[1]);
      const table = obj.table;
      const rows = table.rows.map(({ c }) => c.map(({ v }) => v));

      let lastType = "";

      rows.forEach((row) => {
        let type = row[0];
        let product = row[1];
        let price = row[2];
        let description = row[3];

        if (type !== lastType) {
          menuObj.value[type] = [];
          lastType = type;
          menuObj.value[type].push([product, price, description]);
        } else {
          menuObj.value[type].push([product, price, description]);
        }
      });
    }
  });
</script>

<template>
  <main>
    <ul class="menu">
      <li v-for="(value, key) in menuObj" :key="key" class="menu__category category">
        <div class="category__name">{{ key }}</div>
        <ul class="menu__products">
          <li v-for="data in value" :key="data[1]" class="menu__product product">
            <div class="product__name">{{ data[0] }}</div>
            <div class="product__dots"></div>
            <div class="product__price">{{ data[1] }}</div>
            <div class="product__description">{{ data[2] }}</div>
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  padding-inline: 10px;
}

.menu__category {
  padding-block: 20px;
  display: flex;
  flex-direction: column;
}

.menu__product {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.menu__price {
  margin-inline-start: auto;
}

.category__name {
  padding-block-end: 10px;
  font-size: 3em;
  letter-spacing: 2px;
}

.product__name {
  /* font-variant: small-caps; */
  font-size: 1.2em;
}

.product__description {
  min-width: 100%;
  font-style: italic;
  font-weight: 100;
}

.product__dots {
  border-bottom: 1px dotted var(--color-black);
  flex-grow: 1;
  align-self: center;
  margin-inline: 20px;
}
</style>