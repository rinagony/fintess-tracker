const mongoose = require('mongoose');

const TrainingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exercise'
  }],
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