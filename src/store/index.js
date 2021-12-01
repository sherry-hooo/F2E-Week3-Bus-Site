import { createStore } from "vuex";

export default createStore({
  state: {
    route: {},
  },
  mutations: {
    route(state, status) {
      state.route = status;
    },
  },
  actions: {
    showRouteInfo(context, status) {
      console.log(context, status);
      context.commit("route", status);
    },
  },
  modules: {},
});
