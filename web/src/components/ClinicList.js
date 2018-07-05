import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../component-styles/ClinicListContainer.css';
import ClinicListItem from './ClinicListItem.js';
import ClinicModal from './ClinicModal';

class ClinicList extends Component {
  state = {
    open: false,
    clinics: []
  };

  onCloseModal = () => {
    this.setState({ modalClinic:undefined });
  };

  onListItemClick = (modalClinic) => {
    this.setState({modalClinic})
  };

  componentWillMount() {
            fetch('/businesses')
    .then(results => {
      return results.json();
    }).then(data => {

        this.setState({
          clinics: data.businesses
        })
      // return this.state.clinics
    })

  }

  render() {

    // console.log('==========>', this.state.clinics)
    return (
      <div>

      <div className="list-container">
{/*        {console.log("CLINIC LIST", this.state.clinics)}
*/}        {this.state.clinics.map(clinic => <ClinicListItem key={clinic.id} openModal={() => this.onListItemClick(clinic)} item={clinic}/>)}
        }
      </div>
      {this.state.modalClinic && <ClinicModal item={this.state.modalClinic} onCloseModal={this.onCloseModal}/>
}
      </div>
    )
  }
}


export default ClinicList;


