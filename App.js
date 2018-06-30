import React, { Component } from 'react';
import { TouchableHighlight, Text, View, Image, TextInput, ScrollView, Button, Alert, KeyboardAvoidingView } from 'react-native';
import { styles } from './styles'

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    )}
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    setInterval(() => {
      this.setState(prevState => {
        return { isShowingText: !prevState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

class MyAppText extends Component {
  render() {
    return (
        <Text style={{fontSize: 20, color: 'blue'}}>{this.props.children}</Text>
    );
  }
}

class MyAppHeaderText extends Component {
  render() {
    return (
      <MyAppText>
        <Text style={{fontSize: 50, color: '#dda0dd', fontWeight: 'bold'}}>{this.props.children}</Text>
      </MyAppText>
    );
  }
}

class NavBar extends Component {
  render(){
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 70, height: 90, backgroundColor: 'powderblue'}} />
        <View style={{width: 70, height: 90, backgroundColor: 'skyblue'}} />
        <View style={{width: 70, height: 90, backgroundColor: 'steelblue'}} />
        <View style={{width: 70, height: 90, backgroundColor: 'powderblue'}} />
        <View style={{width: 70, height: 90, backgroundColor: 'skyblue'}} />
        <View style={{width: 70, height: 90, backgroundColor: 'steelblue'}} />
      </View> 
    )
  }
}


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  render() {
    let pic = {
      uri: 'http://images6.fanpop.com/image/photos/34700000/fluffy-dog-dogs-34707073-500-319.jpg'
    };
    
    return (
      <View style={styles.container}>
        <NavBar>
        </NavBar>
        
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
        >
         <Text> Touch Here </Text>
        </TouchableHighlight>
        <View style={[styles.countContainer1]}>
          <Text style={[styles.countText]}>
            { this.state.count !== 0 ? this.state.count: null}
          </Text>
        </View>


        <Button onPress={() => {
          Alert.alert('You tapped the button!');
          }}
          title='Press Me'
        />
        <Button onPress={() => {
          Alert.alert('FUCK ERDs');
        }}
          title='Press the button!'
          color='#841584'
        />

        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput style={{height: 40}} placeholder="Type here to translate!" />
          <TextInput style={{height: 40, borderColor: '#008080', borderWidth: 5, width: 195}} />
        </KeyboardAvoidingView>
        <ScrollView>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </ScrollView>
        <Text style={styles.big}>
          <Blink text="wooooo final projectttt" />
        </Text>
        <Greeting name='Rob' />
        <Greeting name='Chibwe' />
        <Greeting name='Jennifer' />
        <Text style={styles.red}>just red</Text>
        <Text style={{color: '#3cb371', fontSize: 30, fontWeight: 'bold'}}>
          <Greeting name='Waiting' /> <Text style={{color: '#8a2be2'}}> Room </Text>
        </Text>
        <Text style={{color: 'yellow'}}> Room </Text>

        <MyAppText>
          styled text
        </MyAppText>
        <MyAppHeaderText>Header</MyAppHeaderText>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'pink',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   red: {
//     color: 'red',
//     fontSize: 30,
//     fontWeight: 'bold'
//   },
//   big: {
//     fontSize: 30
//   },
//   container1: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     paddingHorizontal: 10
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10
//   },
//   countText: {
//     color: '#FF00FF'
//   }
// });

