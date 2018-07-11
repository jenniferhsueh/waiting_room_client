import React, { Component } from 'react';
import '../component-styles/MapBox.css';
import MapView from './MapView';
import ClinicPortal from './ClinicPortal';

class MapBox extends Component {



  render() {
    { console.log('this.props.clinic from MapBox.js =====>',this.props.clinics)}
    return (
      <div className="map-container">
        { this.props.openClinicView ? (<ClinicPortal waitMinutes={ this.props.waitTime } clinics={ this.props.clinics } currentUser={ this.props.currentUser }/>) : (<MapView clinics={this.props.clinics}/>) }
      </div>
    )
  }
}


export default MapBox;