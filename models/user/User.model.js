const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, minLength: 5, maxLength: 20, required: true },
  password: { type: String, minLength: 5, required: true },
  role: { type: String, enum: ["admin", "moderator"], required: true },
});

const User = mongoose.model("User", UserSchema, "users");

module.exports = { User, UserSchema };
