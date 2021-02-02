<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      width="300"
      clas="elevation-0"
    >
      <v-card tile elevation="0" height="auto" color="transparent">
        <v-row no-gutters justify="center">
          <v-progress-circular
            :size="110"
            color="white"
            indeterminate
            class="mb-8"
          ></v-progress-circular>
          <span class="white--text">Standaard oefeningen laden...</span>
        </v-row>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="showSeedWorkoutsOption" vertical :timeout="-1" color="primary" text>
      U heeft nog geen oefeningen, wilt u standaard oefeningen worden geladen?

      <template #action="{ attrs }">
        <v-btn color="error"
               text
               v-bind="attrs"
               @click="showSeedWorkoutsOption = false"
               style="left: 5px; position: absolute">
          Sluiten
        </v-btn>
        <v-btn color="success" v-bind="attrs" @click="seedWorkouts" text class="ml-8">
          Accepteer
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar v-model="showSeedWorkoutsSucceed" color="success" text>Er zijn succesvol oefeningen toegevoegd!
    </v-snackbar>
  </div>
</template>

<script>
import Workouts from '@/data/Workouts.js';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'WorkoutsLoader',
  data: () => ({
    dialog: false,
    showSeedWorkoutsOption: false,
    showSeedWorkoutsSucceed: false,
    minTimer: 1500,
    dialogTimeout: null,
  }),
  computed: {
    ...mapGetters('Workout', ['hasWorkouts', 'getLocalStorageWorkouts']),
    ...mapGetters('TrainingCycle', ['getLocalStorageProgress']),
  },
  methods: {
    ...mapActions('Workout', ['fetchWorkouts', 'createWorkout']),
    ...mapActions('TrainingCycle', ['fetchProgress']),
    seedWorkouts() {
      this.showSeedWorkoutsOption = false;

      for (let x = 0; x < Workouts.length; x++) {
        this.createWorkout(Workouts[x]);
      }

      this.handleDialog();
    },
    handleDialog() {
      this.dialog = true;

      this.dialogTimeout = setTimeout(() => {
        this.dialog = false;
        this.showSeedWorkoutsSucceed = true;
      }, this.minTimer);
    },
  },
  destroyed() {
    clearTimeout(this.dialogTimeout);
  },
  mounted() {
    this.fetchWorkouts(this.getLocalStorageWorkouts);
    this.fetchProgress(this.getLocalStorageProgress);

    this.showSeedWorkoutsOption = !this.hasWorkouts;
  },
};
</script>

<style>
.v-dialog {
  box-shadow: none !important;
}
</style>
