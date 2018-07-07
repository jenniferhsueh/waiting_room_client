import React, { Component } from 'react';
import {geolocated} from 'react-geolocated';
import Modal from 'react-responsive-modal';
import '../component-styles/MyClinic.css'

class MyClinic extends Component {

  state = {
    open: false,
    minutes: '',
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  onButtonClick = (mins) => {
    this.props.waitMinutes(mins)
    this.onCloseModal()
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

  render() {
    const { open } = this.state;
    return (
      <div>
        <div className="item" onClick={ this.onOpenModal }>
          My Clinic
        </div>
        <Modal
          className="my-clinic"
          open={open} onClose={ this.onCloseModal }
          center>
        <h1>Set Wait Time for {  }</h1>
          <input className="number-selector"
            autoFocus={true}
            type="number"
            name="minutes"
            placeholder="mins"
            min="0"
            max="360"
            step="5"
            onKeyPress={ this.onKeyPress }
            onChange={e => this.handleChange(e)}>
          </input>
          <button className="update-button"
            type="submit"
            onClick={() => this.onButtonClick(this.state.minutes) }>
            Update
          </button>
        </Modal>
      </div>
    )
  }
}


export default MyClinic;