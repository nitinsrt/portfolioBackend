const Health = require("../models/health");

exports.getHealthStatus = async (req, res) => {
  try {
    const healthStatus = await Health.find();
    res.json(healthStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
