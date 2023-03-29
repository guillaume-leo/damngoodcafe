<template>
  <section class="section">
    <div class="section__text">
      damngoodcafe.bx@gmail.com
    </div>
    <div class="section__link">
      <a href="https://www.instagram.com/damngoodcafe/">instagram</a>
    </div>
    <div class="section__map">
      <iframe scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas"
        src="https://maps.google.com/maps?width=337&amp;height=352&amp;hl=en&amp;q=Sint-Jan%20Nepomucenusstraat%2010,%201000%20Brussel%20Bruxelles+(Damn%20Good%20Cafe)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="337" height="352" frameborder="0"></iframe>
    </div>
  </section>
</template>

<style scoped>
.map-generator {
  max-width: 100%;
  max-height: 100%;
  background: none;
}

.section {
  display: grid;
  place-items: center;
}

.section__text,
.section__link,
.section__map {
  padding-block-end: 60px;
  font-size: 25px
}

.section__text:first-of-type {
  padding-block-start: 60px;
}

.section__link {
  color: var(--color-background-dark)
}

.section__link:hover {
  color: red;
}
</style>