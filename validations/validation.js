const Joi = require("@hapi/joi");
const RegistetJoiSchema = require("./Validateschemas/RegisterValidationJoiSchemaJoi");

const RegisterValidation = (req, res, next) => {
  const { error } = RegistetJoiSchema.validate(req.body);

  if (error) {
    return res
      .status(500)
      .json({ data: null, message: error.details[0].message });
  } else {
    next();
  }
};
module.exports = { RegisterValidation };
