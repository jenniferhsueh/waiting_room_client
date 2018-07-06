import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import ClinicList from './components/ClinicList.js';
import MapBox from './components/MapBox.js';


class App extends Component {

  state = {
    clinics: [],
    currentWaitTime: ""
  };

  getWaitTime = (data) => {
    let waitTime = data
    console.log('waitTime from App.js ======>', waitTime)
    return waitTime
  }


  componentDidMount() {
    fetch('/businesses')
    .then(results => {
      return results.json();
    }).then(data => {
      const clinics = []
      data.businesses.map(clinic => {
        let clinicDetails = {
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
     <div className="main-container">
        <Nav waitTime={this.getWaitTime}/>
        <div className="body-container">
          <ClinicList waitTime={this.getWaitTime}/>
          <MapBox />
        </div>
      </div>
    )
  }
}

export default App;