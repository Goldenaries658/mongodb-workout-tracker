const { Workout } = require('../models');
const moment = require('moment');

module.exports = (app) => {
  app.get('/api/workouts', async (req, res, next) => {
    try {
      res.json(await Workout.find({})).exec();
    } catch (err) {
      next(err);
    }
  });

  app.put('/api/workouts/:id', async (req, res, next) => {
    const { body: newExercise, params } = req;
    const { id } = params;
    try {
      const currentWorkout = await Workout.findById(id).exec();
      currentWorkout.exercises.push(newExercise);
      res.json(await Workout.findByIdAndUpdate(id, currentWorkout).exec());
    } catch (err) {
      next(err);
    }
  });

  app.post('/api/workouts', async (req, res, next) => {
    try {
      res.json(await Workout.create({})).exec();
    } catch (err) {
      next(err);
    }
  });

  app.get('/api/workouts/range', async (req, res, next) => {
    const currentWeek = moment().isoWeek();
    try {
      const workouts = await Workout.find({}).exec();
      // Filtering down to current weeks data
      res.json(
        workouts.filter(({ day }) => currentWeek === moment(day).isoWeek())
      );
    } catch (err) {
      next(err);
    }
  });
};
