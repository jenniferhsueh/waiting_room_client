import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import './App.css';
import LoadScreen from './components/LoadScreen.js';
import Nav from './components/Nav.js';
import ClinicList from './components/ClinicList.js';
import MapBox from './components/MapBox.js';


class App extends Component {

  state = {
    loading: true,
    currentUser: {
      id: "7HrLNyrswDEFppuwn67aUg",
      location: {
        latitude: 0,
        longitude: 0
      }
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
    setTimeout(() => this.setState({
      loading: false
    }),1200);
  }

  render() {
    const { loading, currentWaitTime } = this.state

    setTimeout(() =>
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {...this.state.currentUser}
        location.location.latitude = position.coords.latitude
        location.location.longitude = position.coords.longitude
        this.setState({location})
    }),2000)

    if(loading){
     return (<LoadScreen />)
    } else {
      return (
      <div className="main-container">
        <Nav waitTime={this.getWaitTime}/>
        <FadeIn transitionDuration={2000}>
          <div className="body-container">
            <ClinicList clinicList={this.state.clinics}/>
            <MapBox clinics={this.state.clinics}/>
          </div>
        </FadeIn>
      </div>
    )
    }

  }
}

export default App;