import Joi from 'joi-browser'
import { BasePage } from '../shared/BasePage'
import BlogPageRequiredPropsSchema from './BlogPageRequiredPropsSchema'

export class BlogPage extends BasePage {
  constructor (title, description, image, authorName, datePosted) {
    super(title, description);

    this.props.image = image;
    this.props.authorName = authorName;
    this.props.datePosted = datePosted;
  }
}

export function createBlogPage (title, description, image, authorName, datePosted) {
  // Validate props
  const props = {
    image: image,
    authorName: authorName,
    datePosted: datePosted
  }

  // No other props to validate yet.
  const result = Joi.validate(props, BlogPageRequiredPropsSchema);
  if (result.error) {
    throw new Error(`Cant create a BlogPage class without required props, ${result.error.toString()}`);
  }

  return new BlogPage(title, description, image, authorName, datePosted);
}

