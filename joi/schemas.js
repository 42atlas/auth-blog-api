import Joi from 'joi';

export const post = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  body: Joi.string().required()
});
