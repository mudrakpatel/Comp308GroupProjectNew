var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },LarstName: {
    type: String,
    required: true
  },Email: {
    type: String,
    required: true
  },Password: {
    type: String,
    required: true
  },BodyTemperature: {
    type: Number,
    required: false
  },HeartRate: {
    type: Number,
    required: false
  },BloodPressure: {
    type: Number,
    required: false
  },RespiratoryRate: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("User", UserSchema);
