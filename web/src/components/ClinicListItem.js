import React, { Component } from 'react';
import '../component-styles/ListItem.css';

class ClinicListItem extends Component {
  render() {
    return (
      <div className="list-item">
        <div className="name-placeholder">
          Clinic
        </div>
        <div className="wait-placeholder">
          30 Mins
        </div>
        <div className="info-placeholder">
          Tumblr four dollar toast brooklyn literally, next level nisi fam kinfolk.
        </div>
      </div>
    )
  }
}


export default ClinicListItem;


