const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", async (req, res, next) => {
    try {
      const result = await db.Workout.find({});
      res.json(result);
    } catch (err) {
      next(err);
    }
  });
};
