# Keep me fit
A simple application that helps you staying fit! 

### Workout
You can create a workout with a starters amount of exercises and an end goal. This application tries to help you to achieve your end-goal.

- Every 48 hours you can repeat a workout;
- In 12 days, you have to train every muscle-goup/ `WorkoutType`;
- After successfully finishing a workout twice, the current amount of exercises will be raised.

### Training
An algoritme creates a training based on the previous performed workouts. Every day, the algoritme checks which muscle-group you trained recently. Based on recent performed workouts, different workouts or more difficult version of a workout will be selected. The main goal of the application is to accomplish your end-goal.   
After you final achieved your end-goal, the algoritme will repeats a workout, once in 16 days.

- Two worksouts pro day with the same `WorkoutType`;
- A workout will be randomly selected;

### Rules

- Required Workout = `training.workout.Type == muscle && training.lastPerformed <= 12 days && !successfully`;
- Required finished Workout = `training.workout.Type == muscle && training.lastPerformed <= 16 days && successfully`;
- Can perform Workout = `training.workout.Type == muscle && training.lastPerformed > 48 hours`;

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
