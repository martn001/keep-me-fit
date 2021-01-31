# Keep me fit
A simple application that helps you staying fit! 

### Workout
You can create a workout with a starters amount of exercises and an end goal. This application tries to help you to achieve your end-goal.

- Every 48 hours you can repeat a workout;
- After 6 days a workout is necessary, based on a `WorkoutType`;
- After successfully finishing a workout twice, the current amount of exercises will be raised.

### Training
An algoritme creates a training based on the previous performed workouts. Every day, the algoritme checks which muscle-group you trained recently. Based on recent performed workouts, different workouts or more difficult version of a workout will be selected. The main goal of the application is to accomplish your end-goal.   
After you final achieved your end-goal, the algoritme will repeats a workout, once in 14 days.

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
