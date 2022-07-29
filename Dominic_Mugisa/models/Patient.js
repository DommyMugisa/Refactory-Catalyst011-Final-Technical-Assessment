const mongoose = require("mongoose");
const database = require("../config/database");

const PatientSchema = new mongoose.Schema({
  surname: {
    type: String,
    required: true
  },
  givenname: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
    required: true
  },
  residence: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  nationality: {
    type: String,
    required: true
  },
  gendermale: {
    type: String,
  },
  genderfemale: {
    type: String,
  },
  category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Patient", PatientSchema);
