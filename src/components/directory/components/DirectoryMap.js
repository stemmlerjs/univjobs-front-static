import React from 'react'
import PropTypes from 'prop-types'
import '../styles/DirectoryMap.sass'

let mapboxgl
let ReactMapboxGl = {}

if (typeof window !== `undefined`) {
  mapboxgl = require('mapbox-gl')
  ReactMapboxGl = require('react-mapbox-gl')
} else {
  ReactMapboxGl.Map = () => {
    return class Mock extends React.Component {
      constructor() {
        super()
      }
      render() {
        return <div />
      }
    }
  }
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
      markers: [],
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

  componentDidMount() {
    console.log('<DirectoryMap/> Loaded')
  }

  /**
   * updateMarkers
   * @desc Update markers by clearing all existing markers, he
   */

  updateMarkers() {
    const { companies } = this.props
    const { map } = this.state
    const newMarkersList = [];

    try {
      // Remove old markers
      const { markers } = this.state
      markers.map(m => {
        m.remove()
      })

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
      `)
          )

        // Add marker to list
        newMarkersList.push(m)

        // Add marker to map
        m.addTo(map)
      })

      // Then, set the markers list
      this.setState({
        ...this.state,
        markers: newMarkersList,
      })
    } catch (err) {
      console.log("Couldn't load markers", err)
    }
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

    map.addControl(new mapboxgl.NavigationControl())
    console.log("map loaded!!! ======================== ")
    this.updateMarkers()
  }

  componentDidUpdate(prevProps, next) {
    console.log('component updated', prevProps, this.props)
    if (prevProps.isRebuildingMap && !this.props.isRebuildingMap) {
      console.log('Time to rebuild the map')
      this.updateMarkers()
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
    const { 
      currentLatitude, 
      currentLongitude, 
      styleUrl, 
      zoom,
      containerStyle
    } = this.props;

    return (
      <div className="directory-map">
        <Map
          ref={e => {
            this.map = e
          }}
          style={styleUrl ? styleUrl : "mapbox://styles/mapbox/streets-v10"}
          containerStyle={containerStyle ? containerStyle : {
            height: '100vh',
            width: '100%',
          }}
          onStyleLoad={this.onMapLoad}
          center={[currentLongitude, currentLatitude]}
          zoom={[zoom ? zoom : 11]}
          speed={[0.6]}
        >
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
  isRebuildingMapFailure: PropTypes.bool,
  styleUrl: PropTypes.string,
  zoom: PropTypes.number,
  containerStyle: PropTypes.object
}

export default DirectoryMap
