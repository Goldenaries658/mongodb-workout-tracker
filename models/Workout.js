const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: 'Enter exercise type.',
        enum: ['resistance', 'cardio']
      },
      name: {
        type: String,
        trim: true,
        required: 'Enter exercise name.',
        minlength: 5,
        maxlength: 30
      },
      duration: {
        type: Number,
        required: true
      },
      weight: Number,
      reps: Number,
      sets: Number,
      distance: Number
    }
  ]
});

// Setting a virtual to calculate total exercise duration on the fly
workoutSchema.set('toJSON', { virtuals: true });
workoutSchema.virtual('totalDuration').get(function () {
  return this.exercises.reduce((total, { duration }) => total + duration, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
