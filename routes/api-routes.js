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

  app.put("/api/workouts/:id", async (req, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });

  app.post("/api/workouts", async ({ body }, res, next) => {
    try {
    } catch (err) {
      next(err);
    }
  });
};
