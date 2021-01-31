const WorkoutType = {
  BELLY: 1,
  ARMS: 2,
  LEGS: 3,
  SHOULDER: 4,
  UNDER_LEG: 5,
};

const WorkoutName = {
  [WorkoutType.BELLY]: 'Buikspier',
  [WorkoutType.ARMS]: 'Armen',
  [WorkoutType.LEGS]: 'Benen',
  [WorkoutType.SHOULDER]: 'Schouder',
  [WorkoutType.UNDER_LEG]: 'Onderbeen',
};

export { WorkoutType, WorkoutName };
