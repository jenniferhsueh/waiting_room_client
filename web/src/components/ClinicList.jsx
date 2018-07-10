import React, { Component } from 'react';
import '../component-styles/ClinicList.css';
import ClinicListItem from './ClinicListItem';
import ClinicModal from './ClinicModal';

class ClinicList extends Component {
  state = {
    open: false,
    clinics: [],
  };

  onCloseModal = () => {
    this.setState({ modalClinic:undefined });
  };

  onListItemClick = (modalClinic) => {
    this.setState({modalClinic})
  };

  render() {
    return (
      <div className="list-container">
        {this.props.clinicList.map(clinic => <ClinicListItem
          key={clinic.id}
          openModal={() => this.onListItemClick(clinic)}
          item={clinic}/>)}

        {this.state.modalClinic && <ClinicModal
          item={this.state.modalClinic}
          onCloseModal={this.onCloseModal} />}

      </div>
    )
  }
}


export default ClinicList;


