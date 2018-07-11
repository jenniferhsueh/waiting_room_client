import React, { Component } from "react"
import { StyleSheet, Button, Text, View, ScrollView, Linking } from "react-native"
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
                  <Text>{place.location.address1}</Text>
                  <Text onPress={() => Linking.openURL(place.website)} style={{color: "blue"}} >See Reviews</Text>
                  <Button title="get in line" />
                </View>
              }
              rightTitle={
                `Wait Time:\n${place.wait_time} MINS`              
              }
              rightTitleStyle={{color: "black", fontSize: 20}}
              rightTitleNumberOfLines={ 2 }
              
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