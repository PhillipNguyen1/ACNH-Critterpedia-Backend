const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // TODO: Should we change?
  },
  northernSeasonality: {
    type: Array,
    required: true,
  },
  southernSeasonality: {
    type: Array,
    required: true,
  },
  activeHourBegin: {
    type: String, // TODO: is this right?
    required: true,
  },
  activeHourEnd: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = Fish = mongoose.model('fish', FishSchema);
