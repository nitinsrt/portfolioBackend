const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  id: String,
  src: String,
  companyName: String,
  role: String,
  fromTo: String,
  location: String,
  lineOne: String,
  lineTwo: String,
  lineThree: String,
  lineFour: String,
});

const Experience = mongoose.model("Experience", experienceSchema);

module.exports = Experience;
