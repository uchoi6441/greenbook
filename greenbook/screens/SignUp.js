import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import SignUpButton from './../components/SignUpButton';

export class SignUpScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
      text: '',
      id: null,
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>sign up</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <View style={ styles.enterBox }>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              placeholder="name"
              onChangeText={(name) => this.setState({name})}
            />
          </View>
          <View style={ styles.enterBox }>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              placeholder="username"
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View style={ styles.enterBox }>
            <TextInput
              style={ this.state.fontLoaded ? styles.enter : styles.justInCase }
              placeholder="password"
              onChangeText={(password) => this.setState({password})}
            />
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={ styles.bottomImages }>
            <Image
              source={require('./../assets/images/willow.png')}
              style={ styles.willowImage }
            />
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: '10%' }}>
            <SignUpButton
              font = { this.state.fontLoaded }
              text = { 'continue' }
              navigation = { this.props.navigation }
              destination = { 'Home' }
              name = { this.state.name }
              username = { this.state.email }
              password = { this.state.password }
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LogIn')
              }}
            >
              <Text style={ this.state.fontLoaded ? styles.back : styles.else }>back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  body: {
    flexDirection: 'column',
    marginTop: '30%',
  },
  bottomImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  enter: {
    fontSize: 30,
    fontFamily: 'source-code-pro'
  },
  enterBox: {
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').height / 10 * 4,
    marginBottom: 30,
    height: 50,
    flexDirection: 'row',
  },
  heading: {
    height: '12%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: '8%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  justInCase: {
    fontSize: 44,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
  willowImage: {
    width: 150,
    height: 150,
    marginTop: '30%',
    marginLeft: '10%',
  },
});
