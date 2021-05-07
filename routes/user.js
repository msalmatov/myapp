const express = require("express");
const mongoose = require("mongoose");

const UserError = require("../models/user/UserError");
const Password = require("../modules/Password");
const { createUserSchema } = require("../helpers/validators/user");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const User = mongoose.model("User");
    const users = await User.find();
    if (!users) {
      throw UserError.UserNotFound();
    }
    res.json(users);
  } catch (error) {
    res.json({ error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { error } = createUserSchema.validate(req.body);
    if (error) {
      throw UserError.UserValidationFailed();
    }

    const User = mongoose.model("User");

    const found = await User.findByUsername(req.body.username);
    if (found) {
      throw UserError.UserAlreadyExists();
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

router.get("/:userId", async (req, res) => {
  try {
    const User = mongoose.model("User");
    const user = await User.findById(req.params.userId);
    if (!user) {
      throw UserError.UserNotFound();
    }
    res.json(user);
  } catch (error) {
    res.json({ error });
  }
});

router.delete("/:userId", async (req, res) => {
  try {
    const User = mongoose.model("User");
    const user = await User.remove({ _id: req.params.userId });
    res.json(user);
  } catch (error) {
    res.json({ error });
  }
});

module.exports = router;
