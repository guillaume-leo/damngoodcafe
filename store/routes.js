export const useRoutesStore = defineStore({
  id: 'route-store',
  state: () => ({
    path: useRoute().path,
  }),
  actions: {
    setPath(val) {
      this.path = val;
    },
  },
  getters: {
    classes(state) {
      return `content content--${state.path}`;
    },
    isNotHome(state) {
      return state.path !== '/';
    },
  },
});
