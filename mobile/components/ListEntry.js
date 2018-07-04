import React, { Component } from "react"
import { StyleSheet, View, Text } from "react-native"
import { ListItem } from "react-native-elements"

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  }
]

export default class ListEntry extends Component {

  keyExtractor = (item, index) => index
  // renderItem = ({ item }) => (
  //   <ListItem
  //     title={item.name}
  //     subtitle={item.subtitle}
  //   />



  render() {
    return (
      <View style={styles.container} >
        {
          this.props.places.map((place, i) => (
            <ListItem
              key={i}
              title={place.name}
              subtitle={place.phone}
              // subtitle={place.location}
            />
          ))
        }
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