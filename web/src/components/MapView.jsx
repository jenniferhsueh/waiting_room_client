import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import ClinicModal from './ClinicModal';
import '../component-styles/MapView.css';
import 'mapbox-gl/dist/mapbox-gl.css';


class MapView extends Component {

  state = {
    open: false,
    clinics: this.props.clinics,
    wait: "",
    viewport: {
      width: 800,
      height: 680,
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

  render() {
    return (
      <div className="map">
        <ReactMapGL mapStyle="mapbox://styles/robschwitzer/cjj80knux2vho2sn0aufww2dc/"
          mapboxApiAccessToken={'pk.eyJ1Ijoicm9ic2Nod2l0emVyIiwiYSI6ImNqajd4bTl5YzJxZnQzdmxmejhxcDdsMWsifQ.eQJ-_AlQVTM0D9Pfl2mALA'}
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({viewport})}>

          {this.state.clinics.map(clinic => {
            return (
              <Marker key={clinic.id} latitude={clinic.coordinates.lat} longitude={clinic.coordinates.long} offsetLeft={-20} offsetTop={-10} openModal={() => this.onListItemClick(clinic)} item={clinic} >

              <div
                className="time-card"
                onClick={() => this.onListItemClick(clinic)} >
                <div className="wait-time-marker">{ clinic.wait_time } mins</div>
                  <span
                    style={{
                      fontSize:30,
                      color:'#5FB3D0'
                    }}
                    role="img"><i className="fas fa-map-marker-alt"></i>
                  </span>
                </div>
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
