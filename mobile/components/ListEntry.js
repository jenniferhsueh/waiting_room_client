import React, { Component } from "react"
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native"
import { ListItem } from "react-native-elements"

export default class ListEntry extends Component {

  render() {
    return (
      <View style={styles.container} >
        <ScrollView>
        {
          this.props.places.map((place, i) => (
            <ListItem
              hideChevron={true}
              key={i}
              title={place.name}
              subtitle={
                <View>
                  <Text>{place.phone}</Text>
                  <Text onPress={() => Linking.openURL(place.website)} style={{color: "blue"}} >See Reviews</Text>
                </View>
              }
              rightTitle={
                <View>
                  <Text>Wait Time </Text>
                  <Text>{place.wait_time} Minutes</Text>
                </View>
              }
              
              containerStyle={{height: 100}}
              subtitleContainerStyle={{height: 60, paddingLeft: 10 }}
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