const mongoose = require("mongoose");

const myProjects = mongoose.Schema({
  id: String,
  title: String,
  dates: String,
  url: String,
  githubText: String,
  lineOne: String,
  lineTwo: String,
  lineThree: String,
  lineFour: String,
});

const Project = mongoose.model("Project", myProjects)

module.exports = Project
