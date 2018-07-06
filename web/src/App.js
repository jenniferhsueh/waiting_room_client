import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ClinicList from './components/ClinicList.js';
import MapBox from './components/MapBox.js';


class App extends Component {

  state = {
    currentUser: {
      id: "7HrLNyrswDEFppuwn67aUg"
    },
    clinics: [],
  };

  getWaitTime = (waitTime) => {
    this.state.clinics.map((clinic, index) => {
      if (clinic.id === this.state.currentUser.id) {
        this.state.clinics[index].wait_time = parseInt(waitTime);
        this.forceUpdate()
      }
    })
  }


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
    const { currentWaitTime } = this.state
    return (
     <div className="main-container">
        <Nav waitTime={this.getWaitTime}/>
        <div className="body-container">
          <ClinicList clinicList={this.state.clinics}/>
          <MapBox clinics={this.state.clinics}/>
        </div>
      </div>
    )
  }
}

export default App;