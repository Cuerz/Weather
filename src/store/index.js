import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      city: '',
    }
  },
  mutations: {
    SET_CITY(state,city) {
      state.city=city
    },
  },
})

export default store
