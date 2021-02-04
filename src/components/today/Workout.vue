<template>
  <v-alert border="left"
           color="primary"
           :outlined="outlined"
           class="py-2"
           v-if="workout != null && workout.name != null">
    <h2 class="title primary--text">{{workout.name}}</h2>
    <table class="workout-display">
      <tr>
        <td>Goal:</td>
        <td>{{currentGoal}} {{unitTypes[workout.unit]}}</td>
      </tr>
    </table>
    <p v-if="highDetails">{{workout.description}}</p>
    <slot/>
  </v-alert>
</template>

<script>
import { UnitName } from '@/application/enums/Units.js';

export default {
  name: 'Workout',
  props: {
    outlined: {
      type: Boolean,
      default: true,
    },
    highDetails: {
      type: Boolean,
      default: false,
    },
    workout: {
      type: Object,
      required: true,
    },
    currentGoal: {
      type: Number,
      required: false,
    },
  },
  computed: {
    unitTypes: () => UnitName,
  },
};
</script>

<style scoped>
.workout-display tr > td:first-child {
  font-weight: 900;
}
</style>
