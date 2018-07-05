import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import '../component-styles/MapView.css';
import 'mapbox-gl/dist/mapbox-gl.css';


class MapView extends Component {

  state = {

    viewport: {
      width: 986.5,
      height: 735,
      latitude: 49.2823762,
      longitude: -123.1090515,
      zoom: 14
    }
  };

  componentDidMount() {
    fetch('/businesses')
    .then(results => {
      return results.json();
    }).then(data => {
      this.setState(previousState => {
        // console.log("previouse State ===>", data.businesses)
        { clinics: previousState.clinics }
      })
      return this.state.clinics
    })
  }

  render() {
    console.log(this);
    return (
      <div className="map">
        <ReactMapGL mapStyle="mapbox://styles/robschwitzer/cjj80knux2vho2sn0aufww2dc/"
mapboxApiAccessToken={'pk.eyJ1Ijoicm9ic2Nod2l0emVyIiwiYSI6ImNqajd4bTl5YzJxZnQzdmxmejhxcDdsMWsifQ.eQJ-_AlQVTM0D9Pfl2mALA'}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
          <Marker latitude={49.2823760} longitude={-123.1090515} offsetLeft={-20} offsetTop={-10}>
            <div>💰</div>
          </Marker>
        </ReactMapGL>
      </div>
    )
  }
}


export default MapView;

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react'
// import '../component-styles/MapView.css';

//   const AnyReactComponent = ({ text }) => <div>{text}</div>


// class MapView extends Component {
//   constructor() {
//     super();
//     this.state = {
//       clinics: []
//     }
//   }


//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   componentDidMount() {
//     fetch('/businesses')
//     .then(results => {
//       return results.json();
//     }).then(data => {
//       this.setState(previousState => {
//         console.log("previouse State ===>", data.businesses)
//         { clinics: previousState.clinics }
//       })
//       return this.state.clinics
//     })
//   }

//   render() {
//     console.log("Our clinics ===>", this.state.clinics)
//     return (
//       <div>
//       <GoogleMapReact

//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     )
//   }
// }


// export default MapView;
