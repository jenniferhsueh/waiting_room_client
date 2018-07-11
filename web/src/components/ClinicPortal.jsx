import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import '../component-styles/ClinicPortal.css';

class ClinicPortal extends Component {

  state = {
    open: false,
    minutes: '',
    clinicName: ''
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  onKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.onButtonClick(this.state.minutes)
    }
  }

  onButtonClick = (mins) => {
    this.props.waitMinutes(mins)
    this.onOpenModal()
  };

  getClinicNameForCurrentUser = () => {
    let clinName;
    this.props.clinics.map((clinic, index) => {
      if (clinic.id === this.props.currentUser.id) {
        clinName = clinic.name
      }
    })
    return clinName
  }

  render() {
    const { open } = this.state;
    return (
      <div className="clinic-portal">
        <div className="title">{ this.getClinicNameForCurrentUser() }</div>
        <div className="set-time">Set current wait time:</div>
        <input className="number-selector"
          autoFocus={true}
          type="number"
          name="minutes"
          placeholder="mins"
          min="0"
          max="360"
          step="15"
          onKeyPress={ this.onKeyPress }
          onChange={e => this.handleChange(e)}>
        </input>
        <button className="update-button"
          type="submit"
          onClick={() => this.onButtonClick(this.state.minutes) }>
          Update
        </button>
        <Modal
          className="my-clinic"
          open={open} onClose={ this.onCloseModal }
          center>
          <div>Thank you. The wait time for { this.getClinicNameForCurrentUser() } has been set to { this.state.minutes } mins</div>
          </Modal>
      </div>
    )
  }
}


export default ClinicPortal;