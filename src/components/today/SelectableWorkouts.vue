<template>
  <div>
    <workout v-for="training in selected"
             :key="training.id"
             :workout="training.workout"
             :current-goal="training.currentProgress">
      <v-btn small color="grey darken-1" text class="float-right" @click="rejectedTrainings.push(training.id)">
        Overslaan
      </v-btn>
    </workout>
  </div>
</template>

<script>
import Workout from '@/components/today/Workout.vue';
import dayjs from '@/plugins/dayjs.js';
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
    availableTrainings: [],
  }),
  watch: {
    workoutType() {
      this.getAvailableTrainings();
    },
    selected() {
      this.submitSelected();
    },
  },
  computed: {
    ...mapGetters('TrainingCycle', ['getOlderWorkouts']),
    // Filter on skipped trainings and get only twos
    selected() {
      return this.availableTrainings
        .filter(training => training.workout.type === this.workoutType && !this.rejectedTrainings.some(id => id === training.id))
        .slice(0, DefaultSettings.normalAmountOfTrainings);
    },
  },
  created() {
    this.rejectedTrainings = [];

    this.getAvailableTrainings();
  },
  methods: {
    getAvailableTrainings() {
      // Randomize available trainings
      this.availableTrainings = this.getOlderWorkouts
        .sort((a, b) => {
          if (this.priorityWorkout(a) === this.priorityWorkout(b)) return Math.round(Math.random()) === 1 ? 1 : -1;

          return this.priorityWorkout(a) > this.priorityWorkout(b) ? 1 : -1;
        });
    },
    priorityWorkout(training) {
      if (training.lastPerformed == null) return 99;

      let test = dayjs(training.lastPerformed)
        .diff(dayjs(), 'days');

      return Math.ceil(test / 6);
    },
    submitSelected() {
      this.$emit('change', this.selected);
    },
  },
};
</script>

<style scoped>

</style>
