const Joi = require("joi");

const createUserSchema = Joi.object({
  username: Joi.string().alphanum().min(5).max(20).required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{5,30}$")).required(),
  role: Joi.string().valid("admin", "moderator"),
});

module.exports = { createUserSchema };
