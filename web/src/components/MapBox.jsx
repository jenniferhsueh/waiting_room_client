import React, { Component } from 'react';
import '../component-styles/MapBox.css';
import MapView from './MapView';

class MapBox extends Component {
  render() {
    return (
      <div className="map-container">
        <MapView clinics={this.props.clinics}/>
      </div>
    )
  }
}


export default MapBox;