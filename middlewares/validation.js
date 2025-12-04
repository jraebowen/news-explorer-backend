const { celebrate, Joi } = require("celebrate");

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "email" field must be filled in',
    }),
  }),
});

module.exports.validateUserCreation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
    }),
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "email" field must be filled in',
    }),
  }),
});

module.exports.validateId = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24),
  }),
});

module.exports.validateArticleSave = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().min(2).max(30).required().messages({
      "string.empty": 'The "keyword" field must be filled in',
      "string.min": 'The minimum length of "keyword" is 2',
      "string.max": 'The maximum length of "keyword" is 30',
    }),
    title: Joi.string().required().messages({
      "string.empty": 'The "title" field must be filled in',
    }),
    description: Joi.string().required().messages({
      "string.empty": 'The "description" field must be filled in',
    }),
    date: Joi.string().isoDate().required().messages({
      "string.empty": 'The "date" field must be filled in',
      "string.isoDate": 'The "date" field must be a valid ISO date string',
    }),
    source: Joi.string().required().messages({
      "string.empty": 'The "source" field must be filled in',
    }),
    url: Joi.string().uri().required().messages({
      "string.empty": 'The "url" field must be filled in',
      "string.uri": 'The "url" field must be a valid URL',
    }),
    image: Joi.string().uri().required().messages({
      "string.empty": 'The "image" field must be filled in',
      "string.uri": 'The "image" field must be a valid URL',
    }),
  }),
});
