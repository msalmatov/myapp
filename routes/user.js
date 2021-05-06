const express = require("express");
const mongoose = require("mongoose");

const UserErrors = require("../models/user/UserErrors");
const Password = require("../modules/Password");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const User = mongoose.model("User");
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const User = mongoose.model("User");

    const found = await User.findByUsername(req.body.username);
    if (found) {
      throw UserErrors.UserAlreadyExists();
    }

    const pass = await Password.hash(req.body.password);
    const newUser = new User({
      username: req.body.username,
      password: pass,
      role: req.body.role,
    });
    await newUser.save();

    console.log("newUser=", newUser);

    res.json(newUser);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
