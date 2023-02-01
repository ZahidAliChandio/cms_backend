const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  studentId: {
    type: Number,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  studentDegres: {
    type: String,
    required: true,
  },
  studentSemester: {
    type: Number,
    required: true,
  },
  studentDepartment: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
  courseCreditHour: {
    type: Number,
    required: true,
  },
  courseCompletions: {
    type: Number,
    required: true,
  },
});

const course = new mongoose.model("course", courseSchema); // creates course collection in the database
module.exports = course;
