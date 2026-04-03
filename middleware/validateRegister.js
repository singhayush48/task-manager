const Joi = require("joi");

const registerSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters"
    })
});

const validateRegister = (req, res, next) => {
  const { error } = registerSchema.validate(req.body, {
    abortEarly: false
  });

  if (error) {
    const errors = error.details.map(err => err.message);

    return res.status(400).json({
      success: false,
      errors
    });
  }

  next();
};

module.exports = validateRegister;