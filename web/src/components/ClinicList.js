import React, { Component } from 'react';
import '../component-styles/ClinicList.css';
import ClinicListItem from './ClinicListItem.js';
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

  componentDidMount() {
    fetch('/businesses')
    .then(results => {
      return results.json();
    }).then(data => {
      const clinics = []
      data.businesses.map(clinic => {
        let clinicDetails = {
          id: clinic.id,
          name: clinic.name,
          location: clinic.location,
          coordinates: clinic.coordinates,
          wait_time: (Math.floor(Math.random() * 60))
        }
        clinics.push(clinicDetails)
      })
      this.setState({ clinics })
    })
  }

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


