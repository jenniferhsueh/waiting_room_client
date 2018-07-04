import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Header } from "react-native-elements"

export default class Navbar extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'FLUFFY BUNNIES', style: { color: '#fff' } }}
        rightComponent={{ icon: 'menu', color: '#fff' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "red"
  },
})