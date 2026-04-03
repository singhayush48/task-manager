const Joi = require("joi");

const loginSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().required()
});

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body, {
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

module.exports = validateLogin;