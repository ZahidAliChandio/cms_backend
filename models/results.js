const mongoose = require("mongoose");

const resultSchema = mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  assignment1: {
    type: Number,
    required: true,
  },
  assignment2: {
    type: Number,
    required: true,
  },
  assignment3: {
    type: Number,
    required: true,
  },
  quiz1: {
    type: Number,
    required: true,
  },
  quiz2: {
    type: Number,
    required: true,
  },
  quiz3: {
    type: Number,
    required: true,
  },
  oht1: {
    type: Number,
    required: true,
  },
  oht2: {
    type: Number,
    required: true,
  },
  final: {
    type: Number,
    required: true,
  },
});

const result = new mongoose.model("result", resultSchema);
module.exports = result;
