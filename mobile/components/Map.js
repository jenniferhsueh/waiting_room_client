import React, { Component } from "react"
import { StyleSheet, View, Button, Text, Alert } from "react-native"
import { MapView } from "expo"

const Marker = MapView.Marker

export default class Map extends Component {

  regNotification(){
    Alert.alert('Your appointment has been booked!')
  } 

  renderMarkers() {
    return this.props.places.map((place, i) => (

      <Marker key={i} coordinate={place.coords}> 
        <MapView.Callout>
          <View >
            <Text style={{alignSelf: "center"}}>{`${place.wait_time} Mins - ${place.name}`} </Text>
            { this.props.displayName ? <Button title={`Get in line`} onPress={() => this.regNotification()} /> : <Button title="Login or Register to Get in Line" onPress={() => this.props.toggleMenu()}/>}
          </View>
        </MapView.Callout>
      </Marker>
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