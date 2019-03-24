
// import Joi from 'joi-browser'
import { BasePage } from '../shared/BasePage'

export class RegularPage extends BasePage {
  constructor (title, description) {
    super(title, description);
  }
}

export function createRegularPage (title, description) {
  // Validate props here if we get any.
  return new RegularPage(title, description);
}


