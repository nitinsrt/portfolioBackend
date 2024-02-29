const mongoose = require("mongoose");

const Edu = new mongoose.Schema({
  id: String,
  src: String,
  companyName: String,
  role: String,
  fromTo: String,
  location: String,
});

const Education = mongoose.model("Education", Edu);

module.exports = Education;
