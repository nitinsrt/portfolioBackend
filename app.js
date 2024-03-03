const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  // other options...
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

app.use(express.json());

app.use("/api", routes);

app.listen(PORT, () => {
  console.log("Server is listening on PORT 3000");
});
