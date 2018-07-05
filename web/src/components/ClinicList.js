import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../component-styles/ClinicListContainer.css';
import ClinicListItem from './ClinicListItem.js';
import ClinicModal from './ClinicModal';

class ClinicList extends Component {
  state = {
    open: false,
    clinics: [
      {name: 'Clinic A', address: '123 Evergreen Terrace', wait: '30 Mins'},
      {name: 'Clinic B', address: '129 w 81 st', wait: '30 Mins'},
      {name: 'Clinic C', address: '8677 Heinous Ave ', wait: '3 Mins'},
      {name: 'Clinic D', address: '4 Sad Lane', wait: '0 Mins'},
      {name: 'Clinic E', address: '27088 hwy 10', wait: '30 Mins'},
      {name: 'Clinic G', address: '903 Yomamma Dr', wait: '30 Mins'}
    ]
  };

  onCloseModal = () => {
    this.setState({ modalClinic:undefined });
  };

  onListItemClick = (modalClinic) => {
    this.setState({modalClinic})
  };

  render() {
    return (
      <div>
      <div className="list-container">
        {this.state.clinics.map(clinic => <ClinicListItem key={clinic.name} openModal={() => this.onListItemClick(clinic)} item={clinic}/>)}
      </div>
      {this.state.modalClinic && <ClinicModal item={this.state.modalClinic} onCloseModal={this.onCloseModal}/>
}
      </div>
    )
  }
}


export default ClinicList;


