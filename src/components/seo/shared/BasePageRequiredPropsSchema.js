import Joi from 'joi-browser'

const basePagePageSchema = Joi.object().keys({
  title: Joi.string().min(3).max(300).required(),
  description: Joi.string().min(3).max(600).required()
})

export default basePagePageSchema;
