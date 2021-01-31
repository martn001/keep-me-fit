import { UnitType } from '../enums/Units.js';
import { WorkoutType } from '../enums/Workout.js';

export default class Workout {
  constructor(id = 1, name, beginnersGoal, endGoal, amountRaise = 3, workoutType = WorkoutType.BELLY, workoutUnit = UnitType.SECONDS, description = '') {
    this.id = id;
    this.beginnersGoal = beginnersGoal;
    this.endGoal = endGoal;
    this.amountRaise = amountRaise;
    this.name = name;
    this.description = description;
    this.Type = workoutType;
    this.Unit = workoutUnit;

    /*this.repeat = repeat;
    this.breakDuration = breakDuration;*/
  }
}
