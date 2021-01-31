import dayjs from '@/plugins/dayjs.js';
const LOCALSTORAGE_PROGRESS_NAME = 'progress';

export default {
  namespaced: true,
  state: {
    progress: null,
  },
  mutations: {
    setProgress(state, progress) {
      state.progress = progress;
    },
    addTraining(state, training) {
      state.progress.push(training);
    },
    removeTraining(state, id) {
      state.progress = state.progress.filter(training => training.id !== id);
    },
    updateLocalStorage(state) {
      localStorage.setItem(LOCALSTORAGE_PROGRESS_NAME, JSON.stringify(state.progress));
    },
    clearLocalStorage() {
      localStorage.removeItem(LOCALSTORAGE_PROGRESS_NAME);
    },
  },
  getters: {
    getProgress: state => {
      return state.progress ? state.progress : [];
    },
    getWorkoutFromPastTwoDays: state => {
      return state.progress.filter(training => dayjs()
        .diff(dayjs(training.lastPerformed), 'days') <= 2);
    },
    getLocalStorage: () => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_PROGRESS_NAME));
    },
  },
  actions: {
    // Fetch workouts from localStorage and update the state of workouts
    fetchProgress(context) {
      const progress = this.getLocalStorage();

      if (progress == null) {
        context.commit('setProgress', []);
        context.commit('updateLocalStorage');
      } else {
        context.commit('setProgress', progress);
      }
    },
    // Adding a new Training to all existing
    createTraining(context, training) {
      if (context.state.progress == null) this.fetchProgress(context);

      // After adding a new workout, the localstorage should be updated
      context.commit('addTraining', training);
      context.commit('updateLocalStorage');
    },
    // Clear all progress
    deleteProgress(context) {
      context.commit('setProgress', []);
      context.commit('clearLocalStorage');
    },
    // Remove training based on id
    removeProgressOfTraining(context, trainingId) {
      context.commit('removeTraining', trainingId);
      context.commit('updateLocalStorage');
    },
  },
};
