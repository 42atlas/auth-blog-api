import Joi from 'joi';

export const post = Joi.object({
  title: Joi.string().required(),
  body: Joi.string().required()
});

export const signUp = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const signIn = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});
