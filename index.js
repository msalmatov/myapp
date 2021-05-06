require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./components/db");
const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 3000;

const app = express();

// middlewares
app.use(cors());
app.use(bodyParser.json());

// rotes
app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Wellcome");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log("Failed to start server. Error:", error);
  }
};

start();
