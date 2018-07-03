import React, { Component } from 'react';
import '../component-styles/MapBox.css';
import MapView from './MapView.js';

class MapBox extends Component {
  render() {
    return (
      <div className="map-container">
        <MapView />
      </div>
    )
  }
}


export default MapBox;