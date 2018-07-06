import React, { Component } from "react"
import { StyleSheet, View, Text, Image } from "react-native"
import { Card,  ListItem } from "react-native-elements"

export default class Navmenu extends Component {
  render() {
    return (
      <Card containerStyle={styles.container}>
        <View >
          <ListItem key="1" title="My Clinic" titleStyle={styles.text} subtitle="Set Wait Time" subtitleStyle={styles.subtitle}/>
          <ListItem key="2" title="Patients" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
          <ListItem key="3" title="Clinics" titleStyle={styles.text} subtitle="Get Deets" subtitleStyle={styles.subtitle}/>
          <ListItem key="4" title="Register" titleStyle={styles.text} />
          <ListItem key="5" title="Login"titleStyle={styles.text} />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 0,
    margin: 0,
 
    backgroundColor: "#476DC5"
  },
  text: {
    color: "white"
  },
  subtitle: {
    color: "lightgrey"
  }
})