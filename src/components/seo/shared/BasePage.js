import Joi from 'joi-browser'
import BasePageRequiredPropsSchema from './BasePageRequiredPropsSchema'

/**
 * @class BasePage
 * @abstract
 */

export class BasePage {  
  constructor (title, description) {
    this.props = {
      title: title,
      description: description
    }

    // Required
    this._validateBaseProps(this.props);
  }

  getRequiredProps () {
    return {
      title: this.props.title,
      description: this.props.description
    }
  }

  _getDefaultNonRequiredProps () {
    // 
    return {};
  }

  getProps () {
    // TODO: Seek out all of the overrides props here...., these are things
    const defaultNonRequiredProps = this._getDefaultNonRequiredProps()
    return Object.assign({}, defaultNonRequiredProps, this.props);
  }

  _validateBaseProps (props) {
    const result = Joi.validate(props, BasePageRequiredPropsSchema);
    if (result.error) {
      throw new Error('Cant create a BasePage class without title and description');
    }
  }

  validateRequiredProps () {
    throw new Error("Must be implemented by subclass");
  }
}

