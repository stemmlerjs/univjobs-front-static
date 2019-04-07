import Joi from 'joi-browser'

const blogPageRequiredPropsSchema = Joi.object().keys({
  authorName: Joi.string().min(2).max(100).required(),
  image: Joi.string().min(5).max(1000).required(),
  datePosted: Joi.date().required()
})

export default blogPageRequiredPropsSchema;
