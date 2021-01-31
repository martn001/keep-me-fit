import dayjs from '../../plugins/dayjs.js';
import Workout from 'src/application/models/Workout.js';

export default class Training {
  constructor(id, workout) {
    this.id = id;
    this.workout = workout;

    this.validateWorkout();

    this.currentProgress = workout.beginnersGoal;
    this.amountSuccessfulTraining = 0;

    // When workout has been last performed
    this.lastPerformed = dayjs().format('YYYY-MM-DD 00:00');
  }

  // Perform training
  performTraining(succeed = false) {
    // Check if training has been successfully finished
    if (succeed && this.amountSuccessfulTraining++ >= 2) {
      this.amountSuccessfulTraining = 0;

      // Set next progress
      const nextProgress = this.currentProgress + this.workout.amountRaise;
      this.currentProgress = this.workout.endGoal > nextProgress ? nextProgress : this.workout.endGoal;
    }
    // Training was too hard, so lower the difficulty
    else if (!succeed && this.amountSuccessfulTraining-- < 0) {
      this.amountSuccessfulTraining = 0;

      // Set next progress
      const nextProgress = this.currentProgress - this.workout.amountRaise;
      this.currentProgress = this.workout.beginnersGoal > nextProgress ? this.workout.beginnersGoal : nextProgress;
    }

    this.lastPerformed = dayjs().format('YYYY-MM-DD 00:00');
  }

  // Check if training has finished
  hasTrainingFinished() {
    return this.currentProgress >= this.workout.endGoal;
  }

  // Check if workout is valid
  validateWorkout() {
    if (typeof this.workout !== typeof new Workout()) {
      console.error('Workout is niet van het juiste type');
      console.log(this.workout);
    }
  }
}
