import dayjs from '@/plugins/dayjs.js';

const LOCALSTORAGE_PROGRESS_NAME = 'progress';

export default {
  namespaced: true,
  state: {
    progress: null,
    todaySchedule: null,
  },
  mutations: {
    setProgress(state, progress) {
      state.progress = progress;
    },
    setTodaySchedule(state, todaySchedule) {
      state.todaySchedule = todaySchedule;
    },
    addTraining(state, training) {
      state.progress.push(training);
    },
    removeTraining(state, id) {
      state.progress = state.progress.filter(training => training.id !== id);
    },
    removeTodaySchedule(state) {
      state.todaySchedule = null;
    },
    updateProgress(state) {
      localStorage.setItem(LOCALSTORAGE_PROGRESS_NAME, JSON.stringify(state.progress));
    },
    clearLocalStorage() {
      localStorage.removeItem(LOCALSTORAGE_PROGRESS_NAME);
    },
  },
  getters: {
    getProgress: state => state.progress ? state.progress : [],
    getTodaySchedule: state => state.todaySchedule,
    getLatestWorkouts: state => {
      return state.progress.filter(training => training.lastPerformed != null &&
        dayjs().diff(dayjs(training.lastPerformed), 'days') <= 2);
    },
    getOlderWorkouts: state => {
      return state.progress.filter(training => training.lastPerformed == null ||
        dayjs().diff(dayjs(training.lastPerformed), 'days') > 2);
    },
    getLocalStorageProgress: () => {
      return JSON.parse(localStorage.getItem(LOCALSTORAGE_PROGRESS_NAME));
    },
  },
  actions: {
    // Fetch workouts from localStorage and update the state of workouts
    fetchProgress(context, localStorageProgress) {
      if (localStorageProgress == null) {
        context.commit('setProgress', []);
        context.commit('updateProgress');
      } else {
        context.commit('setProgress', localStorageProgress);
      }
    },
    // Adding a new Training to all existing
    createTraining(context, training) {
      if (context.state.progress.some(w => w.id === training.id)) return;

      // After adding a new workout, the localstorage should be updated
      context.commit('addTraining', training);
      context.commit('updateProgress');
    },
    // Clear all progress
    deleteProgress(context) {
      context.commit('setProgress', []);
      context.commit('clearLocalStorage');
    },
    // Remove training based on id
    removeProgressOfTraining(context, trainingId) {
      context.commit('removeTraining', trainingId);
      context.commit('updateProgress');
    },
  },
};
