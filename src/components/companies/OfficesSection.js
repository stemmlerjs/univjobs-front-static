import React from 'react'
import PropTypes from 'prop-types'
import withSection from './withSection'
import '../../styles/company/ListSection.sass'

const Office = props => (
  <div className="list-section-item">
    <div className="office-title">{props.name ? props.name : props.city}</div>
    <div>{props.street}</div>
    <div>
      {props.city}, {props.provinceOrState}
    </div>
    <div>{props.country}</div>
  </div>
)

Office.propTypes = {
  name: PropTypes.string,
  street: PropTypes.string.isRequired,
  headquarters: PropTypes.bool.isRequired,
  city: PropTypes.string.isRequired,
  provinceOrState: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
}

/**
 * OfficesSection
 *
 * @class Of all of the offices for this company.
 */

class OfficesSection extends React.Component {
  constructor() {
    super()
  }

  render() {
    const { offices } = this.props
    console.log('<OfficesSection/>', offices)

    return (
      <div className="list-section">
        {offices.map((office, i) => (
          <Office key={i} {...office} />
        ))}
      </div>
    )
  }
}

OfficesSection.propTypes = {
  title: PropTypes.string.isRequired,
  offices: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string.isRequired,
      headquarters: PropTypes.bool.isRequired,
      city: PropTypes.string.isRequired,
      provinceOrState: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ),
  size: PropTypes.string.isRequired,
}

export default withSection(OfficesSection)
