import React, { Component } from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { ListItem } from "react-native-elements"

export default class ListEntry extends Component {

  render() {
    return (
      <View style={styles.container} >
        <ScrollView>
        {
          this.props.places.map((place, i) => (
            <ListItem
              key={i}
              title={place.name}
              subtitle={place.phone}
            />
          ))
        }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "75%",
    backgroundColor: "ivory"
  },
})