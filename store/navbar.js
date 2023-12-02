export const useNavbarStore = defineStore({
    id: 'navBar-store',
    state: () => ({
      open: false,
    }),
    actions: {
      setOpen(val) {
        this.open = val;
      },
    },
    getters: {
      getOpen(state) {
        return state.open;
      },
    },
  });