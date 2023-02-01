const mongoose = require("mongoose"); //require our mongose module (used for ease with mongoDB)

const facultySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// creating collectins

const faculty = new mongoose.model("faculty", facultySchema); // creates faculty collection in the database

module.exports = faculty; // exporting our faculty collection to use in other modules
