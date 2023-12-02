<template>
  <section class="section">
    <h1 class="section__title">Hey there!</h1>
    <p class="section__text">
      We’re Damn Good, a cafe located in Brussels city center. Here, we do
      everything ourselves, from the beans we roast for our coffees to the
      delicious pastries and even the bread for the sandwiches. Damn Good was
      founded by four friends: Louise, Eleonore, Pierre and Paul.
      <br />
      <br />
      After a long career in hospitality working as baristas, waiters and cooks,
      we decided to open our own place in February 2023. In the heart of the
      city, between Rogier and Yser we’ve created a place where everybody is
      welcome, for a quick coffee in the morning, a meeting with your colleagues
      or a lunchtime feast with one of our damn good sandwiches.
    </p>
  </section>
  <section class="section">
    <h1 class="section__title">Come say hi!</h1>
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
