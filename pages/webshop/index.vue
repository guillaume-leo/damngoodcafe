<template>
  <!-- <div id="my-categories-82685269"></div> -->
  <main>
    <div id="my-store-82685269">
      <div v-show="isLoading"> <span class="loader"></span></div>
    </div>
  </main>

</template>

<script setup>

const ecwidScript = `
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;

  if (typeof Ecwid != 'undefined') Ecwid.destroy(); 
  window._xnext_initialization_scripts = [{
    widgetType: 'ProductBrowser',
    id: 'my-store-82685269',
    arg: ["id=productBrowser"]
  },
  {
    widgetType: 'CategoriesV2',
    id: 'my-categories-82685269',
    arg: ["id=CategoriesV2"]
  }];

  if (!document.getElementById('ecwid-script')) {
    var script = document.createElement('script');
    script.charset = 'utf-8';
    script.type = 'text/javascript';
    script.src = 'https://app.ecwid.com/script.js?82685269';
    script.id = 'ecwid-script'
    document.body.appendChild(script);
    Ecwid.OnPageLoaded.add(function(page) {
    if (page.type == "CART") {
      // do something ...
  }
});
  } else {
    ecwid_onBodyDone();
  }    
`

useHead({
  script: [
    {
      children: ecwidScript,
      body: true
    },
    // {
    //   children: 'Ecwid.init();',
    //   body: true
    // }
  ],
})

const isLoading = ref(true);

onMounted(() => {
  const store = document.querySelector('#my-store-82685269')

  const options = {
    attributes: true
  }

  function callback(mutationList, observer) {
    mutationList.forEach(function (mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        isLoading.value = false
      }
    })
  }

  const observer = new MutationObserver(callback)
  observer.observe(store, options)
})

</script>

<style scoped>
.footer__link--shopping-cart {
  background-color: red !important;
}



/* LOADING SHIT */

.loader {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50%;
  margin-left: auto;
  margin-right: auto;
  width: 100px;
  height: 100px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>