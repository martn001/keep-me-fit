const LOCALSTORAGE_WORKOUT_NAME = 'workouts';

export default {
  namespaced: true,
  state: {
    workouts: null,
  },
  mutations: {
    setWorkouts(state, workouts) {
      state.workouts = workouts;
    },
    addWorkout(state, workout) {
      state.workouts.push(workout);
    },
    removeWorkout(state, id) {
      state.workouts = state.workouts.filter(workout => workout.id !== id);
    },
    updateWorkouts(state) {
      localStorage.setItem(LOCALSTORAGE_WORKOUT_NAME, JSON.stringify(state.workouts));
    },
    clearLocalStorage() {
      localStorage.removeItem(LOCALSTORAGE_WORKOUT_NAME);
    },
  },
  getters: {
    getWorkouts: state => {
      return state.workouts ? state.workouts : [];
    },
    hasWorkouts: state => state.workouts && state.workouts.length > 0,
    getLocalStorageWorkouts: () => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_WORKOUT_NAME));
    },
  },
  actions: {
    // Fetch workouts from localStorage and update the state of workouts
    fetchWorkouts(context, localStorageWorkouts) {
      if (localStorageWorkouts == null) {
        context.commit('setWorkouts', []);
        context.commit('updateWorkouts');
      } else {
        context.commit('setWorkouts', localStorageWorkouts);
      }
    },
    // Adding a new Workout to all existing
    createWorkout(context, workout) {
      // need localStorageWorkouts
      //if (context.state.workouts == null) this.fetchWorkouts(context);

      if (context.state.workouts.some(w => w.id === workout.id)) return;

      // After adding a new workout, the localstorage should be updated
      context.commit('addWorkout', workout);
      context.commit('updateWorkouts');
    },
    // Clear all cookies
    deleteWorkouts(context) {
      context.commit('setWorkouts', []);
      context.commit('clearLocalStorage');
    },
    // Remove workout based on id
    removeWorkout(context, workoutId) {
      context.commit('removeWorkout', workoutId);
      context.commit('updateWorkouts');
    },
  },
};
