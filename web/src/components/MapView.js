import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import ClinicModal from './ClinicModal';
import '../component-styles/MapView.css';
import 'mapbox-gl/dist/mapbox-gl.css';


class MapView extends Component {

  state = {
    open: false,
    clinics: [],
    wait: "",
    viewport: {
      width: 986.5,
      height: 735,
      latitude: 49.2823762,
      longitude: -123.1090515,
      zoom: 14
    }
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
          name: clinic.name,
          location: clinic.location,
          coordinates: clinic.coordinates,
          wait_time: (Math.floor(Math.random()* 60))
        }
        clinics.push(clinicDetails)
      })

      this.setState({ clinics })
    })
  }


  render() {
    return (
      <div className="map">
        <ReactMapGL mapStyle="mapbox://styles/robschwitzer/cjj80knux2vho2sn0aufww2dc/"
          mapboxApiAccessToken={'pk.eyJ1Ijoicm9ic2Nod2l0emVyIiwiYSI6ImNqajd4bTl5YzJxZnQzdmxmejhxcDdsMWsifQ.eQJ-_AlQVTM0D9Pfl2mALA'}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}>

          {this.state.clinics.map(clinic => {
            return (
              <Marker key={clinic.id} latitude={clinic.coordinates.latitude} longitude={clinic.coordinates.longitude} offsetLeft={-20} offsetTop={-10} openModal={() => this.onListItemClick(clinic)} item={clinic} >

              <div onClick={() => this.onListItemClick(clinic)} ><span style={{fontSize:46}} role="img">⚰️</span></div>
              </Marker>);
          })}
        </ReactMapGL>
        {this.state.modalClinic && <ClinicModal item={this.state.modalClinic} onCloseModal={this.onCloseModal}/>}
      </div>
    )
  }
}
//

export default MapView;
