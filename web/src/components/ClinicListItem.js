import React, { Component } from 'react';
import '../component-styles/ListItem.css';

class ClinicListItem extends Component {

  render() {
    return (
      <div className="list-item" onClick={this.props.openModal}>
        <div className="name-placeholder">
          {this.props.item.name}
        </div>
        <div className="wait-placeholder">
          {this.props.item.wait}
        </div>
        <div className="info-placeholder">
          {this.props.item.address}
        </div>
      </div>
    )
  }
}

export default ClinicListItem;


