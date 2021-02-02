<template>
  <v-row class="text-center pa-2" justify="center" no-gutters>
    <v-col cols="10">test</v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Today',
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters('Workout', ['getWorkouts']),
    ...mapGetters('TrainingCycle', ['getLatestWorkouts']),
    latestWorkoutTypes() {
      return this.getLatestWorkouts.map(workout => {
        return {
          type: workout.type,
        };
      });
    },
  },
  methods: {},
  created() {
    console.log(this.getLatestWorkouts);
  },
};
</script>

<style scoped>

</style>
