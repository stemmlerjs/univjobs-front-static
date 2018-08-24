import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/company/withSection.sass'

// This function takes a component...
function withCompanySection(WrappedComponent) {
  // ...and returns another component...
  return class SectionComponent extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { size, title, alt, ...otherProps } = this.props;
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <div className={`with-section-component section-${size} ${alt ? 'alt' : ''}`}>
          <div className="title">{title}</div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  };
}

withCompanySection.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired, // half || full
  alt: PropTypes.bool
}

export default withCompanySection;
