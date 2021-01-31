const LOCALSTORAGE_PROGRESS_NAME = 'progress', LOCALSTORAGE_SCHEDULE_NAME = 'schedule';

export default {
  namespaced: true,
  state: {
    progress: null,
    schedule: null,
  },
  mutations: {
    setHistory(state, workouts) {
      state.workouts = workouts;
    },
    addWorkout(state, workout) {
      state.workouts.push(workout);
    },
    setLocalStorage(workouts) {
      localStorage.setItem(LOCALSTORAGE_TRAINING_CYCLE_NAME, JSON.stringify(workouts));
    },
    clearLocalStorage() {
      localStorage.removeItem(LOCALSTORAGE_TRAINING_CYCLE_NAME);
    },
  },
  getters: {
    getHistory: state => {
      return state.workouts ? state.workouts : [];
    },
    findWorkout: state => {
      return null;
    },
    getLocalStorage: () => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_TRAINING_CYCLE_NAME));
    },
  },
  actions: {
    // Fetch workouts from localStorage and update the state of workouts
    fetchWorkouts(context) {
      const workouts = this.getLocalStorage();

      if (workouts == null) {
        context.commit('setLocalStorage', []);
      }

      context.commit('setWorkouts', workouts || []);
    },
    // Adding a new Workout to all existing
    createWorkout(context, workout) {
      if (context.state.workouts == null) this.fetchWorkouts(context);

      // After adding a new workout, the localstorage should be updated
      context.commit('addWorkout', workout);
      context.commit('setLocalStorage', context.state.workouts);
    },
    // Clear all cookies
    deleteWorkouts(context) {
      context.commit('setWorkouts', []);
      context.commit('clearLocalStorage');
    },
  },
};
