import{u as a}from"./composables.cf68692a.js";import{r as n,j as p,b as _,f as t,w as u,v as w,u as l,o as m,p as f,e as y}from"./entry.bf8796cc.js";import{_ as h}from"./_plugin-vue_export-helper.a1a6add7.js";const v=e=>(f("data-v-3d46d658"),e=e(),y(),e),g={id:"my-store-82685269"},b=v(()=>t("span",{class:"loader"},null,-1)),x=[b],B={__name:"shop",setup(e){a({script:[{children:`
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
`,body:!0}]});const s=n(!0);return p(()=>{const o=document.querySelector("#my-store-82685269"),i={attributes:!0};function c(d,I){d.forEach(function(r){r.type==="attributes"&&r.attributeName==="class"&&(s.value=!1)})}new MutationObserver(c).observe(o,i)}),(o,i)=>(m(),_("main",null,[t("div",g,[u(t("div",null,x,512),[[w,l(s)]])])]))}},T=h(B,[["__scopeId","data-v-3d46d658"]]);export{T as default};
