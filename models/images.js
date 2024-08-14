const mongoose = require("mongoose");

const images = mongoose.Schema({
  id: String,
  srcOne: String,
  srcTwo: String,
  srcThree: String
});

const Skills = mongoose.model("image", images);

module.exports = Skills;