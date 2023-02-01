const mongoose = require("mongoose"); //require our mongose module (used for ease with mongoDB)

const attendanceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  SDA: {
    week1: {
      type: Number,
      required: true,
    },
    week2: {
      type: Number,
      required: true,
    },
    week3: {
      type: Number,
      required: true,
    },
    week4: {
      type: Number,
      required: true,
    },
    week5: {
      type: Number,
      required: true,
    },
    week6: {
      type: Number,
      required: true,
    },
    week7: {
      type: Number,
      required: true,
    },
    week8: {
      type: Number,
      required: true,
    },
    week9: {
      type: Number,
      required: true,
    },
    week10: {
      type: Number,
      required: true,
    },
    week11: {
      type: Number,
      required: true,
    },
    week12: {
      type: Number,
      required: true,
    },
    week13: {
      type: Number,
      required: true,
    },
    week14: {
      type: Number,
      required: true,
    },
    week15: {
      type: Number,
      required: true,
    },
    week16: {
      type: Number,
      required: true,
    },
  },
  Web: {
    week1: {
      type: Number,
      required: true,
    },
    week2: {
      type: Number,
      required: true,
    },
    week3: {
      type: Number,
      required: true,
    },
    week4: {
      type: Number,
      required: true,
    },
    week5: {
      type: Number,
      required: true,
    },
    week6: {
      type: Number,
      required: true,
    },
    week7: {
      type: Number,
      required: true,
    },
    week8: {
      type: Number,
      required: true,
    },
    week9: {
      type: Number,
      required: true,
    },
    week10: {
      type: Number,
      required: true,
    },
    week11: {
      type: Number,
      required: true,
    },
    week12: {
      type: Number,
      required: true,
    },
    week13: {
      type: Number,
      required: true,
    },
    week14: {
      type: Number,
      required: true,
    },
    week15: {
      type: Number,
      required: true,
    },
    week16: {
      type: Number,
      required: true,
    },
  },
  OS: {
    week1: {
      type: Number,
      required: true,
    },
    week2: {
      type: Number,
      required: true,
    },
    week3: {
      type: Number,
      required: true,
    },
    week4: {
      type: Number,
      required: true,
    },
    week5: {
      type: Number,
      required: true,
    },
    week6: {
      type: Number,
      required: true,
    },
    week7: {
      type: Number,
      required: true,
    },
    week8: {
      type: Number,
      required: true,
    },
    week9: {
      type: Number,
      required: true,
    },
    week10: {
      type: Number,
      required: true,
    },
    week11: {
      type: Number,
      required: true,
    },
    week12: {
      type: Number,
      required: true,
    },
    week13: {
      type: Number,
      required: true,
    },
    week14: {
      type: Number,
      required: true,
    },
    week15: {
      type: Number,
      required: true,
    },
    week16: {
      type: Number,
      required: true,
    },
  },
  TW: {
    week1: {
      type: Number,
      required: true,
    },
    week2: {
      type: Number,
      required: true,
    },
    week3: {
      type: Number,
      required: true,
    },
    week4: {
      type: Number,
      required: true,
    },
    week5: {
      type: Number,
      required: true,
    },
    week6: {
      type: Number,
      required: true,
    },
    week7: {
      type: Number,
      required: true,
    },
    week8: {
      type: Number,
      required: true,
    },
    week9: {
      type: Number,
      required: true,
    },
    week10: {
      type: Number,
      required: true,
    },
    week11: {
      type: Number,
      required: true,
    },
    week12: {
      type: Number,
      required: true,
    },
    week13: {
      type: Number,
      required: true,
    },
    week14: {
      type: Number,
      required: true,
    },
    week15: {
      type: Number,
      required: true,
    },
    week16: {
      type: Number,
      required: true,
    },
  },
  PE: {
    week1: {
      type: Number,
      required: true,
    },
    week2: {
      type: Number,
      required: true,
    },
    week3: {
      type: Number,
      required: true,
    },
    week4: {
      type: Number,
      required: true,
    },
    week5: {
      type: Number,
      required: true,
    },
    week6: {
      type: Number,
      required: true,
    },
    week7: {
      type: Number,
      required: true,
    },
    week8: {
      type: Number,
      required: true,
    },
    week9: {
      type: Number,
      required: true,
    },
    week10: {
      type: Number,
      required: true,
    },
    week11: {
      type: Number,
      required: true,
    },
    week12: {
      type: Number,
      required: true,
    },
    week13: {
      type: Number,
      required: true,
    },
    week14: {
      type: Number,
      required: true,
    },
    week15: {
      type: Number,
      required: true,
    },
    week16: {
      type: Number,
      required: true,
    },
  },
});

// creating collectins

const attendance = new mongoose.model("attendance", attendanceSchema); // creates profile collection in the database

module.exports = attendance; // exporting our profile collection to use in other modules
