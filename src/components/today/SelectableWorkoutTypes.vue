<template>
  <v-radio-group v-model="selected" v-if="allRecommendedWorkoutTypes.length" hide-details dense class="text-center">
    <v-alert v-for="type in allRecommendedWorkoutTypes"
             :key="type.value"
             border="left"
             color="primary"
             outlined>
      <v-radio v-model="type.value">
        <template v-slot:label>
          {{type.text}}
        </template>
      </v-radio>
    </v-alert>
  </v-radio-group>
</template>

<script>
import { mapGetters } from 'vuex';
import { WorkoutName } from '@/application/enums/Workout.js';

export default {
  name: 'SelectableWorkoutTypes',
  data: () => ({
    //
    selected: null,
  }),
  props: {
    value: {
      type: Number,
    },
  },
  watch: {
    selected() {
      this.$emit('input', this.selected);
    },
  },
  computed: {
    ...mapGetters('Workout', ['getWorkouts', 'getWorkoutTypes']),
    ...mapGetters('TrainingCycle', ['getLatestWorkouts']),
    latestWorkoutTypes() {
      return this.getLatestWorkouts.map(workout => {

        return {
          type: workout.type,
        };
      });
    },
    allRecommendedWorkoutTypes() {
      return this.getWorkoutTypes.map(workout => {
        return {
          text: WorkoutName[workout.type],
          value: workout.type,
          disabled: !this.latestWorkoutTypes.some(w => w.type === workout.type),
        };
      });
    },
  },
  methods: {},
  created() {
    this.selected = this.value;
  },
};
</script>

<style scoped>

</style>
