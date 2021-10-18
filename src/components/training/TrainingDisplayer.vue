<template>
  <v-dialog
    v-model="dialog"
    width="500"
    fullscreen
    hide-overlay
    scrollable
    transition="dialog-bottom-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn color="accent" dark v-bind="attrs" v-on="on" x-large @click="setupTraining">
        <v-icon color="white" class="mr-3">fa-play</v-icon>
        Begin de training
      </v-btn>
    </template>

    <!-- Header of dialog -->
    <v-card tile>
      <v-toolbar flat dark color="primary" max-height="160px">
        <v-btn icon dark @click="dialog = false">
          <v-icon>fa-times</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <!-- TODO: More space for extra options -->
        <!--<v-menu bottom
          right
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              dark
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              @click="() => {}"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>-->

        <template #extension>
          <h2 class="display-1 mt-8 ml-10">
            <span class="text-capitalize">{{dayName}},</span>
            <br/>
            {{dayDetails}}
          </h2>
        </template>
      </v-toolbar>

      <!-- Display workouts -->
      <v-card-text class="pt-6 pb-0">
        <workout v-for="training in selected"
                 :key="training.id"
                 :workout="training.workout"
                 high-details
                 :current-goal="training.currentProgress">
          <v-btn color="accent darken-1" class="float-right" @click="startTraining(training)">
            Start
          </v-btn>
        </workout>
        <SuccessfulWorkout/>
        <FailedWorkout/>
      </v-card-text>

      <!-- Actions after training has been succeed -->
      <v-card-actions class="justify-center">
        <v-btn color="accent" @click="dialog = false" :disabled="!finished" x-large>
          <v-icon color="white" class="mr-3">fa-flag</v-icon>
          Voltooi je training
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Workout from '@/components/workout/Workout.vue';
import dayjs from '@/plugins/dayjs.js';
import FailedWorkout from '@/components/workout/Failed.vue';
import SuccessfulWorkout from '@/components/workout/Successful.vue';

export default {
  name: 'TrainingDisplayer',
  components: {
    FailedWorkout,
    SuccessfulWorkout,
    Workout,
  },
  data: () => ({
    dialog: false,
    finished: false,
    currentDate: dayjs(),
    selected: [],
  }),
  props: {
    selectedTrainings: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    selectedTrainings() {
      this.fillSelected();
    },
  },
  computed: {
    dayName() {
      return this.currentDate.format('dddd');
    },
    dayDetails() {
      return this.currentDate.format('d MMMM');
    },
  },
  created() {
    this.fillSelected();
  },
  methods: {
    startTraining(training) {
      console.log(training);
    },
    fillSelected() {
      this.selected = this.selectedTrainings;
    },
    setupTraining() {
      console.log('test');
      // TODO: save trainings in history, but set as not succeed
    },
  },
};
</script>

<style scoped>

</style>
