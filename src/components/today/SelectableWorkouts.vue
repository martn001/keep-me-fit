<template>
  <div v-if="selectedAbleTrainings">
    <workout v-for="training in selectedAbleTrainings" :key="training.id" :workout="training.workout" :current-goal="training.currentProgress">
      <v-btn small color="grey darken-1" text class="float-right" @click="rejectedTrainings.push(training.id)">
        Overslaan
      </v-btn>
    </workout>
  </div>
</template>

<script>
import Workout from '@/components/today/Workout.vue';
import { mapGetters } from 'vuex';
import DefaultSettings from '@/data/DefaultSettings.js';

export default {
  name: 'SelectableWorkouts',
  components: { Workout },
  props: {
    workoutType: {
      type: Number,
    },
  },
  data: () => ({
    rejectedTrainings: [],
  }),
  computed: {
    ...mapGetters('TrainingCycle', ['getOlderWorkouts']),
    selectedAbleTrainings() {
      // TODO: First check if there are really old workouts
      return this.getOlderWorkouts.filter(training => training.workout.type === this.workoutType && !this.rejectedTrainings.some(id => id === training.id))
        .slice(0, DefaultSettings.normalAmountOfTrainings);
    },
  },
  created() {
    this.rejectedTrainings = [];
  },
};
</script>

<style scoped>

</style>
