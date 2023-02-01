const mongoose = require("mongoose") //require our mongose module (used for ease with mongoDB)

const adminSchema = new mongoose.Schema({
    adminName : {
        type: String,
        required: true
    },
    adminPassword : {
        type: String,
        required: true
    }
})


// creating collectins

const admin = new mongoose.model("admin", adminSchema) // creates admin collection in the database

module.exports = admin // exporting our admin collection to use in other modules