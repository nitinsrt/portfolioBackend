const mongoose = require("mongoose");

const HealthCheck = mongoose.Schema({
  id: String,
  text: String,
});

const Health = mongoose.model("Health", HealthCheck);

module.exports = Health;
