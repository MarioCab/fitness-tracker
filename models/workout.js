const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "What type of workout is it?",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout",
      },
      weight: {
        type: Number,
        required: "Enter a weight",
      },
      reps: {
        type: Number,
        required: "Enter a rep length",
      },
      set: {
        type: Number,
        required: "Enter a set length",
      },
    },
  ],

  duration: {
    type: Number,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
