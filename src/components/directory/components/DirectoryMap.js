import React from 'react'
import PropTypes from 'prop-types'
import CompanyMarker from './CompanyMarker'
import '../styles/DirectoryMap.sass'

let mapboxgl;
let ReactMapboxGl = {};

if (typeof window !== `undefined`) {
  mapboxgl = require('mapbox-gl')
  ReactMapboxGl = require('react-mapbox-gl')
} else {
  ReactMapboxGl.Map = function() { return {} }
}

const Map = ReactMapboxGl.Map({
  accessToken:
    'pk.eyJ1Ijoia3N0ZW1tbGVyIiwiYSI6ImNpbzYzdHY3OTAyNXF3M2tqcnBsNnNnbG0ifQ.t5zgcqnSItauuI69WK-Sew',
})

class DirectoryMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      mapLoaded: false,
      markers: []
    }
    this.onMapLoad = this.onMapLoad.bind(this)
    this.changeLocation = this.changeLocation.bind(this)
    this.updateMarkers = this.updateMarkers.bind(this)
  }

  /**
   * componentDidMount
   *
   * @desc When the component mounts, we will attempt to get the current
   * user's geo-location. If we can't get it, we'll just use the
   * coordinates for Union Station.
   */

  componentDidMount() {}

  /**
   * updateMarkers
   * @desc Update markers by clearing all existing markers, he
   */

  updateMarkers() {
    const { companies } = this.props
    const { map } = this.state
    const newMarkersList = [];

    // Remove old markers
    const { markers } = this.state;
    markers.map((m) => {
      m.remove();
    });

    // Create new markers
    companies.forEach(function(marker, i) {
      // create a HTML element for each feature
      var el = document.createElement('div')
      el.className = 'marker'
      el.innerText = `${i + 1}`

      // Create a marker
      let m = new mapboxgl.Marker(el)
        .setLngLat([marker.position.lng, marker.position.lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`<div>
        <div class="image-container"><img src="${marker.logoUrl}"/></div>
        <div>
          <h3>${marker.companyName}</h3>
          <p>${marker.address}</p>
          <div class="industry">${marker.industry.label}</div>
        </div>
      </div>
      `));

      // Add marker to list
      newMarkersList.push(m);

      // Add marker to map
      m.addTo(map)
    })

    // Then, set the markers list
    this.setState({
      ...this.state,
      markers: newMarkersList
    })
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
      mapLoaded: true,
    })

    map.addControl(new mapboxgl.NavigationControl());

    this.updateMarkers()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.isRebuildingMap && !this.props.isRebuildingMap) {
      console.log('Time to rebuild the map')
      this.updateMarkers();
    }
  }

  /**
   * changeLocation
   *
   * @desc Function that allows the user to fly to a new location.
   * @param {Number} lng longitude
   * @param {Number} lat latitude
   */

  changeLocation = (lng, lat) => {
    const { map } = this.state
    map.flyTo({ center: [lng, lat], zoom: 11, speed: 0.6 })
  }

  render() {
    const { currentLatitude, currentLongitude, companies } = this.props
    return (
      <div className="directory-map">
        <Map
          ref={e => {
            this.map = e
          }}
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
          {/* <Source
            id="company-markers"
            geoJsonSource={{
              type: 'geojson',
              data: {
                type: 'FeatureCollection',
                features: companies.map((comp, i) => {
                  return {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: [comp.position.lng, comp.position.lat],
                    },
                    properties: {
                      title: comp.companyName,
                    }
                  }
                }),
              },
            }}
          /> */}
          {/* <Layer
            type="symbol"
            id="company-markers"
            layout={{ 
              'icon-image': 'marker-15',
              "text-field": "{title}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}
            sourceId="company-markers"
          /> */}
        </Map>
      </div>
    )
  }
}

DirectoryMap.propTypes = {
  currentLatitude: PropTypes.number,
  currentLongitude: PropTypes.number,
  companies: PropTypes.array,
  isRebuildingMap: PropTypes.bool,
  isRebuildingMapSuccess: PropTypes.bool,
  isRebuildingMapFailure: PropTypes.bool
}

export default DirectoryMap
