import React from 'react'
import PropTypes from 'prop-types'
import Joi from 'joi-browser'

import PageType from '../components/PageType'

const requiredPropsSchema = Joi.object().keys({
  title: Joi.string().min(3).max(300).required(),
  description: Joi.string().min(3).max(600).required()
})

const regularPagePropsSchema = Joi.object().keys({

})

const blogPostPagePropsSchema = Joi.object().keys({
  datePublished: Joi.date().required(),
  authorName: Joi.string().min(2).max(100).required(),
  image: Joi.im

  
})

class SEO extends React.Component {
  constructor (props) {
    super(props);
  }

  validateRequiredProps () {
    const { requiredProps } = this.props;
    const result = Joi.validate(requiredProps, requiredPropsSchema);
    if (result.error) {
      console.error(result.error);
    }
  }

  validatePageProps () {
    // if require page props aren't passed in, throw an error
    const { pageType } = this.props;
    const result = Joi.validate(pageType);

  }

  render() {
    return (
      <div></div>
    )
  }
}
export default SEO;

SEO.propTypes = {
  requiredProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  pageType: PropTypes.string.isRequired,
  pageProps: PropTypes.object.isRequired
}

/**
 * 
 * 
 * <SEO
  required={{
    title: 'title'
    description: 'desc'
  }}
  type={PageTypes.REGULAR}
  pageProps={{

  }}
/>
 */
