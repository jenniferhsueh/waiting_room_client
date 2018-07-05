import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import '../component-styles/MapView.css';

class MapView extends Component {

  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 49.2823762,
      longitude: -123.1090515,
      zoom: 8
    }
  };

  render() {
    return (
      <div className="map">
        <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
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
