const imageModel = require("../models/images");

exports.getImageStatus = async (req, res) => {
  try {
    const imageStatus = await imageModel.find();
    res.json(imageStatus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
