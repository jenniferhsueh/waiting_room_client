import React from "react"
import { StyleSheet, Text, View, SafeAreaView, } from "react-native"
import Map from "./Map"
import { Location, Permissions, MapView } from "expo"
import YelpService from "./yelp"


const region = {
  latitude: 49.246292,
  longitude: -123.116226,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const deltas = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default class App extends React.Component {
  state = {
    region: null,
    coffeeShops: []
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  getClinics = async () => {
    const { latitude, longitude } = this.state.region;
    const userLocation = { latitude, longitude };
    const coffeeShops = await YelpService.getClinics(userLocation);
    this.setState({ coffeeShops });
  };

  getLocationAsync = async () => {
    // Code Below asks to get user location and then
    // sets the region to the latitude and 

    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    const region = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      ...deltas
    };
    await this.setState({ region });
    await this.getClinics();
  }

  render() {
    const { region, coffeeShops } = this.state;
/*show a preloader*/
    
    return (
      <SafeAreaView style={styles.container}>
        <Map region={region} places={coffeeShops} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    left: 0,
    right:0,
    top: 0,
    bottom: 0,
    position: 'absolute'
  }
})