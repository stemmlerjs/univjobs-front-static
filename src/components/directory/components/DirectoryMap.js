import React from 'react'
import PropTypes from 'prop-types'
import CompanyMarker from './CompanyMarker'
import '../styles/DirectoryMap.sass'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

const DirectoryMap = withScriptjs(
  withGoogleMap(props => {
    const { companies, lat, lng } = props;

    const markers = companies.map((company, i) => (
      <CompanyMarker
        key={i}
        company={company}
        location={{ lat: company.position.lat, lng: company.position.lon }}
      />
    ))

    return (
      <div className="directory-map">
        <GoogleMap defaultZoom={14} center={{ lat: lat, lng: lng }}>
          {markers}
        </GoogleMap>
      </div>
    )
  })
)

export default DirectoryMap

DirectoryMap.propTypes = {
  companies: PropTypes.arrayOf({
    company: PropTypes.shape({
      title: PropTypes.string,
    }),
    lat: PropTypes.number,
    lon: PropTypes.number,
  }),
}
