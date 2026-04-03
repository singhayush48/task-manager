const Joi = require("joi");

const taskSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.empty": "Title is required"
    }),

  description: Joi.string()
    .allow("")
    .max(500),

  completed: Joi.boolean()
});

const validateTask = (req, res, next) => {
  const { error } = taskSchema.validate(req.body, {
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

module.exports = validateTask;