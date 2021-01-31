<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <span>Keep me fit!</span>
    </v-app-bar>

    <v-main class="background-layout">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Workouts from '@/data/Workouts.js';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('Workout', ['getWorkouts', 'getLocalStorage']),
  },
  created() {
    this.fetchWorkouts(this.getLocalStorage);

    if (this.getWorkouts.length === 0) {
      console.log('Load new workouts');
      this.seedWorkouts();
    } else {
      console.log('Nothing happend');
    }

    console.log('Result is', localStorage.getItem('workouts'));
  },
  methods: {
    ...mapActions('Workout', ['fetchWorkouts', 'createWorkout']),
    seedWorkouts() {
      for (let x = 0; x < Workouts.length; x++) {
        this.createWorkout(Workouts[x]);
      }
    },
  },
};
</script>

<style scoped>
/*.background-layout { @/plugins/dayjs.js
  background-image: linear-gradient(to right bottom, #fffcf4 20%, #42ff2b7d 60%, #17e40a70 20%)
}*/
</style>
