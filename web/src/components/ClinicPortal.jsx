import React, { Component } from 'react';
import '../component-styles/ClinicPortal.css';

class ClinicPortal extends Component {

  state = {
    minutes: '',
    clinicName: ''
  }

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
  };

  getClinicNameForCurrentUser = () => {
    let clinName;
    this.props.clinic.map((clinic, index) => {
      if (clinic.id === this.props.currentUser.id) {
        clinName = clinic.name
      }
    })
    return clinName
  }

  render() {
    return (
      <div className="clinic-portal">
      <h1>Set Wait Time for {/*{ this.getClinicNameForCurrentUser() }*/}</h1>
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
      </div>
    )
  }
}


export default ClinicPortal;