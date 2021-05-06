const mongoose = require("mongoose");
const connectionString = process.env.DB_CONN_STR || "mongodb://localhost/test";
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to DB!");

  // All models should be registered
  require("../models/user/User.model.js");
});
module.exports = db;
