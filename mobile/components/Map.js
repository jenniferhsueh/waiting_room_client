import React, { Component } from "react"
import { StyleSheet } from "react-native"
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
      <MapView style={styles.container}
        region={region}
        showsUserLocation={true}
        showsMyLocationButton
      >{this.renderMarkers()}
      </MapView>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "75%",
    backgroundColor: "red"
  }
})