import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Header, Button, } from "react-native-elements"

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={{ icon: "home", color: "#fff" }}
          centerComponent={{ text: "FLUFFY BUNNIES", style: { color: "#fff" } }}
          rightComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.toggleMenu() }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "red"
  },
})