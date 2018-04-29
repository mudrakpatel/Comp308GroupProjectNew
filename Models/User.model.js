var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  FirstName: {
    type: String
  },LastName: {
    type: String
  },UserType: {
    type: String,
    enum: ["Patient", "Nurse"],
    msg: ">>> User type can only be Nurse or Patient"
  },Email: {
    type: String
  },Password: {
    type: String
  },BodyTemperature: {
    type: Number,
    default: 37
  },HeartRate: {
    type: Number,
    default: 72
  },BloodPressure: {
    type: Number,
    default: 120
  },RespiratoryRate: {
    type: Number,
    default: 12
  }
});

module.exports = mongoose.model("User", UserSchema);
