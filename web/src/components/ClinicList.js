import React, { Component } from 'react';
import '../component-styles/ClinicListContainer.css';
import ClinicListItem from './ClinicListItem.js';

class ClinicList extends Component {
  render() {
    return (
      <div className="list-container">
        <ClinicListItem />
        <ClinicListItem />
        <ClinicListItem />

      </div>
    )
  }
}


export default ClinicList;


