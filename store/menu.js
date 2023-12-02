export const useMenuStore = defineStore({
  id: 'menu-store',
  state: () => ({
    menu: {},
    sheetID: '1zFHh6heEuu--3w6ajSBX3N3ULhkImZVD3WI4AlJWLyQ',
    qu: 'SELECT *',
  }),
  actions: {
    getMenu() {
      const url = `https://docs.google.com/spreadsheets/d/${
        this.sheetID
      }/gviz/tq?&tq=${encodeURIComponent(this.qu)}`;
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
            let lastType = '';
            rows.forEach((row) => {
              let type = row[0];
              let product = row[1];
              let price = row[2];
              let description = row[3];

              if (type !== lastType) {
                this.menu[type] = [];
                lastType = type;
                this.menu[type].push([product, price, description]);
              } else {
                this.menu[type].push([product, price, description]);
              }
            });
          }

        });
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
