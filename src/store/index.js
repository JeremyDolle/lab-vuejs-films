import Vue from "vue";
import Vuex from "vuex";

import films from "./films";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    films
  }
});

export default store;
