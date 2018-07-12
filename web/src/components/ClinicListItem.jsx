import React, { Component } from 'react';
import '../component-styles/ListItem.css';

class ClinicListItem extends Component {

  checkUserClinic(clinicId){
    let flag = false;
    if(this.props.currentUser){
      for(var i = 0; i < this.props.clinic.length; i++){
        if(clinicId === this.props.currentUser.clinics_id){
          flag = true;
          break;
        }
      }
    }
    return flag;
  }


  render() {
    return (
      <div className={`${ this.checkUserClinic(this.props.item.id) ? 'unique-list-item' : 'list-item'}`} onClick={this.props.openModal}>
        <div className="name-placeholder">
          {this.props.item.name}
        </div>
        <div className="wait-placeholder">
          {this.props.item.wait_time} Mins
        </div>
        <div className="info-placeholder">
          {this.props.item.location.address1}
        </div>
      </div>
    )
  }
}

export default ClinicListItem;


