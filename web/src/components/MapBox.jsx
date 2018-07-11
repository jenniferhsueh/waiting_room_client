import React, { Component } from 'react';
import '../component-styles/MapBox.css';
import MapView from './MapView';
import ClinicPortal from './ClinicPortal';

class MapBox extends Component {



  render() {
    return (
      <div className="map-container">
        { this.props.openClinicView ? (<ClinicPortal waitMinutes={ this.props.waitTime } clinic={ this.props.clinic } currentUser={ this.props.currentUser }/>) : (<MapView clinics={this.props.clinics}/>) }
      </div>
    )
  }
}


export default MapBox;