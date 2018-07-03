import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'
import '../component-styles/MapView.css';

class MapView extends Component {
  static defaultProps = {
    center: { lat: 49.2823762, lng: -123.1090515 },
    zoom: 14
  }

  render() {
    return (
      <div className="map">
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
        </GoogleMapReact>
      </div>
    )
  }
}


export default MapView;