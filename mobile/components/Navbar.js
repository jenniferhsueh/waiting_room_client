import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
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
    width: "100%",
    backgroundColor: "red"
  },
})