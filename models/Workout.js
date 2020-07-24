const mongoose = require("mongoose");

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    required: "Enter a day",
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter exercise type.",
        enum: ["resistance", "cardio"],
      },
      name: {
        type: String,
        trim: true,
        required: "Enter exercise name.",
        minlength: 5,
        maxlength: 30,
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number,
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
