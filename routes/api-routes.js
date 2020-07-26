const db = require("../models");

module.exports = (app) => {
  app.get("/api/workouts", async (req, res, next) => {
    try {
      res.json(await db.Workout.find({}));
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

  app.post("/api/workouts", async (req, res, next) => {
    try {
      res.json(await db.Workout.create({}));
    } catch (err) {
      next(err);
    }
  });
};
