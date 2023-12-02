<template>
  <button ref="button" @click="handleClick" class="button">
    <img class="button__icon" :src="src" alt="button icon" />
  </button>
</template>

<script setup>
const p = defineProps({
  src: String,
  size: String,
});

const emit = defineEmits(["clicked"]);

const button = $ref(null);

onMounted(() => {
  button.style.maxWidth = p.size + "px";
});

const state = $ref(false);

const handleClick = () => {
  state = !state;
  emit("clicked", state);
};

defineExpose(
  $$({
    state,
  })
);
</script>

<style scoped>
.button {
  max-width: 0;
}
</style>
