import dayjs from '@/plugins/dayjs.js';

export default class Training {
  constructor(id, workout) {
    this.id = id;
    this.workoutId = workout.id;
    this.workout = workout;

    this.amountSuccessfulTraining = 0;
    this.currentProgress = workout.beginnersGoal;

    // When workout has been last performed
    this.lastPerformed = null;
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

    this.lastPerformed = dayjs()
      .format('YYYY-MM-DD 00:00');
  }

  // Check if training has finished
  hasTrainingFinished() {
    return this.currentProgress >= this.workout.endGoal;
  }
}
