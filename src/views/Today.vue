<template>
  <div>
    <v-stepper v-model="stepper" vertical>
      <v-stepper-step step="1">Voorkeur aan spiergroep</v-stepper-step>

      <v-stepper-content step="1">
        <SelectableWorkoutTypes v-model="selectedWorkoutType"/>
        <v-divider class="mb-4"/>
        <v-btn color="primary" @click="stepper = 2" class="float-right" :disabled="!selectedWorkoutType">Verder</v-btn>
      </v-stepper-content>

      <v-stepper-step step="2">Bevestig de oefening(en)</v-stepper-step>

      <v-stepper-content step="2">
        <SelectableWorkouts :workout-type="selectedWorkoutType" @change="getSelectedWorkouts"/>

        <v-divider class="mb-4"/>
        <v-btn text @click="stepper--">Terug</v-btn>
        <v-btn color="primary"
               @click="stepper = 3"
               class="float-right"
               :disabled="!selectedWorkouts || !selectedWorkouts.length">Verder
        </v-btn>
      </v-stepper-content>

      <v-stepper-step step="3">Training</v-stepper-step>

      <v-stepper-content step="3">
        <v-sheet width="100%" height="200px">
          <v-row align="center" justify="center" class="fill-height">
            <TrainingDisplayer :selected-trainings="selectedWorkouts"/>
          </v-row>
        </v-sheet>

        <v-divider class="mb-4"/>
        <v-btn text @click="stepper--">Terug</v-btn>
        <v-btn color="primary" @click="stepper = 4" class="float-right">Verder</v-btn>
      </v-stepper-content>

      <v-stepper-step step="4">Klaar!</v-stepper-step>

      <v-stepper-content step="4">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-divider class="mb-4"/>
        <v-btn color="primary" @click="stepper = 1" class="float-right">Klaar</v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import SelectableWorkoutTypes from '@/components/today/SelectableWorkoutTypes.vue';
import SelectableWorkouts from '@/components/today/SelectableWorkouts.vue';
import TrainingDisplayer from '@/components/training/TrainingDisplayer.vue';

export default {
  name: 'Today',
  components: {
    TrainingDisplayer,
    SelectableWorkouts,
    SelectableWorkoutTypes,
  },
  data: () => ({
    stepper: 1,
    selectedWorkoutType: null,
    selectedWorkouts: [],
    //
  }),
  methods: {
    getSelectedWorkouts(workouts) {
      this.selectedWorkouts = workouts;
    },
  },
  created() {
    //console.log(this.allRecommendedWorkoutTypes);
  },
};
</script>

<style scoped>

</style>
