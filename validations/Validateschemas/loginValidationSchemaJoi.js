const Joi = require("@hapi/joi");

const schema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

module.exports = schema;
