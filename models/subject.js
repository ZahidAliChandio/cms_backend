const mongoose = require("mongoose"); //require our mongose module (used for ease with mongoDB)

const subjectSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  courseId: {
    type: String,
    required: true,
  },
  Quiz1: {
    type: String,
    required: true,
  },
  Quiz2: {
    type: String,
    required: true,
  },
  Quiz3: {
    type: String,
    required: true,
  },
  Assignment1: {
    type: String,
    required: true,
  },
  Assignment2: {
    type: String,
    required: true,
  },
  Assignment3: {
    type: String,
    required: true,
  },
  OHT1: {
    type: String,
    required: true,
  },
  OHT2: {
    type: String,
    required: true,
  },
  Final: {
    type: String,
    required: true,
  },
});

// creating collectins

const subject = new mongoose.model("subject", subjectSchema); // creates subject collection in the database

module.exports = subject; // exporting our subject collection to use in other modules
