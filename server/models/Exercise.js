const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  exercise_name: {
    type: String,
    required: true
  },
  muscle_group: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  equipment: {
    type: [String],
    required: true
  },
  difficulty_level: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Exercise', ExerciseSchema);