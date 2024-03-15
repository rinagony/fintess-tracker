const mongoose = require('mongoose');

const ExerciseTrainingSchema = new mongoose.Schema({
  sets: {
    type: Number,
    required: true
  },
  repetitions: {
    type: Number,
    required: true
  },
  exerciseUuid: {
    type: String,
    required: true
  }
});

const TrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  exercises: [ExerciseTrainingSchema],
  duration: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Training', TrainingSchema);