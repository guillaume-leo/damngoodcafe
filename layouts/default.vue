<template>
  <div class="layout">
    <Header />
    <DesktopHeader />
    <div v-if="!isNavbarOpen" :class="routeStore.classes">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useRoutesStore } from "@/store/routes";
import { useNavbarStore } from "@/store/navbar";

useHead({
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap",
      crossorigin: "",
    },
  ],
});

const navbarStore = useNavbarStore();

const { open: isNavbarOpen } = storeToRefs(useNavbarStore());

const routeStore = useRoutesStore();

const route = useRoute();

watch(route, (newRoute) => {
  routeStore.setPath(newRoute.path);
});
</script>

<style>
.layout {
  font-family: "Titillium Web", sans-serif;
  max-height: 100%;
  min-width: 100%;
  animation: 1.5s ease-out 0s 1 fadeIn;
  display: flex;
  flex-direction: column;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.content {
  padding-block: 60px;
  overflow: scroll;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.content::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.content {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
