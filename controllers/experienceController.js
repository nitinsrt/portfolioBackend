const Experience = require("../models/experience");

exports.getAllExperience = async (req, res) => {
  try {
    const Experiences = await Experience.find();
    res.json(Experiences);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
