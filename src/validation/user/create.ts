import Joi from 'joi';

export const create = Joi.object({
  userId: Joi.string().min(0).max(255).optional(),
  firstName: Joi.string().min(1).max(255).required().messages({
    'any.required': 'First name is required',
    'string.empty': 'First name cannot be empty',
    'string.min': 'First name must be at least 1 character long',
    'string.max': 'First name must be at most 255 characters long',
  }),
  lastName: Joi.string().min(1).max(255).required().messages({
    'any.required': 'Last name is required',
    'string.empty': 'Last name cannot be empty',
    'string.min': 'Last name must be at least 1 character long',
    'string.max': 'Last name must be at most 255 characters long',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.empty': 'Email cannot be empty',
    'string.email': 'Email must be a valid email',
  }),
  googleId: Joi.string().allow(null, ''),
}).options({ abortEarly: false });

