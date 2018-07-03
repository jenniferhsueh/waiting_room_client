import React, { Component } from "react"
import { View, Text } from "react-native"
import { MapView } from "expo"

const Marker = MapView.Marker

export default class Map extends Component {
  renderMarkers() {
    return this.props.places.map((place, i) => (
      <Marker key={i} title={place.name} coordinate={place.coords} />
    ))
  }
  
  render() {
    const { region } = this.props
    return (
      <MapView style={styles.map}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton
      >{this.renderMarkers()}
      </MapView>
    )
  }
}
const styles = {
  container: {
    width: "100%",
    height: "80%"
  },
  map: {
    left: 0,
    right:0,
    top: "15%",
    bottom: 0,
    position: 'absolute'
  }
}