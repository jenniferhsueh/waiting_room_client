import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { Header, Button, } from "react-native-elements"
import { styles } from "../assets/styles"

import clock from "../assets/clock.svg"

export default class Navbar extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header
        outerContainerStyles={{ backgroundColor: "#478bb5" }}
          centerComponent={{ text:`${this.props.displayName}` ? `Hello ${this.props.displayName}` : "Waiting Room", style: { color: "#fff", fontSize:25 } }}
          rightComponent={{ icon: "menu", color: "#fff", onPress: () => this.props.toggleMenu() }}
        />
      </View>
    );
  }
}
