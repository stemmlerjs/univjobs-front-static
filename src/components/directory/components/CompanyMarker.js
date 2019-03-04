import React from 'react'
import PropTypes from 'prop-types'
import { Marker } from 'react-google-maps'
// import StethoscopeIcon from "../stethoscopeIcon.png";

export default class CompanyMarker extends React.Component {
  render() {
    return (
      <Marker
        position={this.props.location}
        // icon={StethoscopeIcon}
      />
    )
  }
}

CompanyMarker.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
}
