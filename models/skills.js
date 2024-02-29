const mongoose = require("mongoose");

const mySkills = mongoose.Schema({
  id: String,
  title: String,
  list: [
    {
      id: String,
      s: String,
    },
  ],
});

const Skills = mongoose.model("Skill", mySkills);

module.exports = Skills;
