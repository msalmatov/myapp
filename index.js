require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Wellcome");
});

const start = async () => {
  try {
    await mongoose.connect(
      process.env.DB_CONNECTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      },
      () => {
        console.log("Connected to DB");
      },
    );

    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log("Failed to start server. Error:", error);
  }
};

start();
