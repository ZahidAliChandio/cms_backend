const mongoose = require("mongoose"); //require our mongose module (used for ease with mongoDB)

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  RegNo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  Course: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  CNIC: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Nationality: {
    type: String,
    required: true,
  },
});

const profile = new mongoose.model("profile", profileSchema); // creates profile collection in the database

module.exports = profile;
