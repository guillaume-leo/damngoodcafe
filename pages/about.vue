<template>
  <section class="section">
    <h1 class="section__title">
      story
    </h1>
    <p class="section__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nemo aperiam perspiciatis! Minus fugit qui,
      vel totam voluptatibus blanditiis dicta repellat quos alias, error corrupti nihil incidunt dolor laborum deserunt.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem eveniet vitae assumenda architecto id
      incidunt, praesentium sed facere fuga doloribus debitis voluptate qui nobis velit suscipit quos eligendi ipsam!
    </p>
  </section>
  <section class="section">
    <h1 class="section__title">
      products
    </h1>
    <p class="section__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nemo aperiam perspiciatis! Minus fugit qui,
      vel totam voluptatibus blanditiis dicta repellat quos alias, error corrupti nihil incidunt dolor laborum deserunt.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem eveniet vitae assumenda architecto id
      incidunt, praesentium sed facere fuga doloribus debitis voluptate qui nobis velit suscipit quos eligendi ipsam!
    </p>
  </section>
  <section class="section">
    <h1 class="section__title">
      sandwiches
    </h1>
    <p class="section__text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate nemo aperiam perspiciatis! Minus fugit qui,
      vel totam voluptatibus blanditiis dicta repellat quos alias, error corrupti nihil incidunt dolor laborum deserunt.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt exercitationem eveniet vitae assumenda architecto id
      incidunt, praesentium sed facere fuga doloribus debitis voluptate qui nobis velit suscipit quos eligendi ipsam!
    </p>
  </section>
</template>

<style scoped>
.section {
  padding-inline: 10px;
}

.section__title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 10px;
  font-variant: small-caps;
  margin-block: 30px;


}

.section:nth-of-type(even) .section__title {
  text-align: right;
  color: var(--color-white);
}

.section__text {
  font-size: 20px;
  color: var(--color-gray-800);
  padding-block: 30px;
}

.section__hr {
  margin-block: 40px;
  color: var(--color-black);
  margin-inline: auto;
}
</style>