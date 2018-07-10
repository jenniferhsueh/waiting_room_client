import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import './App.css';
import LoadScreen from './components/LoadScreen';
import Nav from './components/Nav';
import ClinicList from './components/ClinicList';
import MapBox from './components/MapBox';


class App extends Component {

  state = {
    loading: true,
    currentUser: null,
    clinics: []
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
    if(this.state.clinics.length) {
    } else {
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

    setTimeout(() => this.setState({
      loading: false
    }),1200);
  }

  getCurrentUser = (user) => {
    if(user) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordinates = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
        this.setState((prevState) => {
          return {
            currentUser: {
              ...prevState.currentUser,
              coordinates
            }
          }
        });
      });
    }
    this.setState({
      currentUser: user
    })
  }

  render() {
    const { loading } = this.state
    if(loading){
     return (<LoadScreen />)
    } else {
      return (
      <div className="main-container">
        <Nav waitTime={ this.getWaitTime } clinic={ this.state.clinics } currentUser={ this.state.currentUser } getCurrentUser={ this.getCurrentUser }/>
        <FadeIn transitionDuration={ 2000 }>
          <div className="body-container">
            <ClinicList clinicList={ this.state.clinics }/>
            <MapBox clinics={ this.state.clinics }/>
          </div>
        </FadeIn>
      </div>
    )}
  }
}

export default App;