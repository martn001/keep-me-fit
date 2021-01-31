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
      // TODO: Name should be unique
      state.workouts.push(workout);
    },
    removeWorkout(state, name) {
      state.workouts = state.workouts.filter(workout => workout.name !== name);
    },
    updateLocalStorage(state) {
      localStorage.setItem(LOCALSTORAGE_WORKOUT_NAME, JSON.stringify(state.workouts));
    },
    clearLocalStorage() {
      localStorage.removeItem(LOCALSTORAGE_WORKOUT_NAME);
    },
  },
  getters: {
    getWorkouts: state => {
      // TODO: Probably unnecessary
      return state.workouts ? state.workouts : [];
    },
    getLocalStorage: () => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_WORKOUT_NAME));
    },
  },
  actions: {
    // Fetch workouts from localStorage and update the state of workouts
    fetchWorkouts(context) {
      const workouts = this.getLocalStorage();

      if (workouts == null) {
        context.commit('setWorkouts', []);
        context.commit('updateLocalStorage');
      } else {
        context.commit('setWorkouts', workouts);
      }
    },
    // Adding a new Workout to all existing
    createWorkout(context, workout) {
      if (context.state.workouts == null) this.fetchWorkouts(context);

      // After adding a new workout, the localstorage should be updated
      context.commit('addWorkout', workout);
      context.commit('updateLocalStorage');
    },
    // Clear all cookies
    deleteWorkouts(context) {
      context.commit('setWorkouts', []);
      context.commit('clearLocalStorage');
    },
    // Remove workout based on name
    removeWorkout(context, workoutName) {
      context.commit('removeWorkout', workoutName);
      context.commit('updateLocalStorage');
    },
  },
};
