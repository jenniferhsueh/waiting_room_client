import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Image, TextInput, ScrollView, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { styles } from './assets/styles'

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    )}
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  
  render() {
    let pic = {
      uri: "http://images6.fanpop.com/image/photos/34700000/fluffy-dog-dogs-34707073-500-319.jpg"
    };
    
    return (
      <View style={styles.container}>
        <Greeting />
      </View>
    );
  }
}

