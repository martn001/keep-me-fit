import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import Workout from './modules/Workout';
import TrainingCycle from './modules/TrainingCycle';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  modules: {
    Workout,
    TrainingCycle,
  },
});
