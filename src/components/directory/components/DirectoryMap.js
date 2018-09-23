import React from 'react'
import PropTypes from 'prop-types'
import CompanyMarker from './CompanyMarker'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import mapboxgl from 'mapbox-gl';
import '../styles/DirectoryMap.sass'

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoia3N0ZW1tbGVyIiwiYSI6ImNpbzYzdHY3OTAyNXF3M2tqcnBsNnNnbG0ifQ.t5zgcqnSItauuI69WK-Sew',
})

class DirectoryMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      mapLoaded: false
    }
    this.onMapLoad = this.onMapLoad.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.updateMarkers = this.updateMarkers.bind(this);
  }

  /**
   * componentDidMount
   * 
   * @desc When the component mounts, we will attempt to get the current
   * user's geo-location. If we can't get it, we'll just use the 
   * coordinates for Union Station.
   */

  componentDidMount () {
    
  }

  updateMarkers () {
    const { companies } = this.props;
    const { map } = this.state;
    companies.forEach(function(marker, i) {

      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';
      el.innerText = `${i + 1}`

      // make a marker for each feature and add to the map
      new mapboxgl.Marker(el)
      .setLngLat([marker.position.lng, marker.position.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(`<div>
      <div class="image-container"><img src="${marker.logoUrl}"/></div>
      <div>
        <h3>${marker.companyName}</h3>
        <p>${marker.address}</p>
        <div class="industry">${marker.industry.label}</div>
      </div>
    </div>
    `))
      .addTo(map);
    });
  }

  /**
   * onMapLoad
   * @desc When the map is loaded, we'll save a reference to
   * it in state.
   */

  onMapLoad = map => {
    this.setState({
      ...this.state,
      map: map,
      mapLoaded: true
    })

    this.updateMarkers();
  }

  /**
   * changeLocation
   * 
   * @desc Function that allows the user to fly to a new location.
   * @param {Number} lng longitude
   * @param {Number} lat latitude
   */

  changeLocation = (lng, lat) => {
    const { map } = this.state;
    map.flyTo({ center: [lng, lat], zoom: 11, speed: 0.6 })
  }

  render() {
    const {currentLatitude, currentLongitude } = this.props;
    return (
      <div className="directory-map">
        <Map
        ref={(e) => { this.map = e; }}
        style="mapbox://styles/mapbox/streets-v10"
        containerStyle={{
          height: '100vh',
          width: '100%',
        }}
        onStyleLoad={this.onMapLoad}
        center={[currentLongitude, currentLatitude]}
        zoom={[11]}
        speed={[0.6]}
      >
        <Layer 
          type="symbol" 
          id="marker" 
          layout={{ 'icon-image': 'marker-15' }}>
        </Layer>
      </Map>
      </div>
      
    )
  }
}

DirectoryMap.propTypes = {
  currentLatitude: PropTypes.number,
  currentLongitude: PropTypes.number,
  companies: PropTypes.array
}

export default DirectoryMap
