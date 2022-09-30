import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";

Vue.use(Vuex);

const store = new Vuex.store({
  state: {
    user: null,
    db: fb.db,
    ui: fb.ui,
    storage: fb.storage,
    auth: fb.auth
  },
  mutations: {
    setUserProfile(state, val) {
      state.user = val
    }

  },
  actions: {

  }
})

export default store