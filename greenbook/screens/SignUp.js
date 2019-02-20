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
              placeholder="email"
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
          <View style={{flexDirection: 'column', alignItems: 'flex-end', marginTop: Dimensions.get('window').height / 35, marginLeft: Dimensions.get('window').width / 15 }}>
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
    marginTop: Dimensions.get('window').height / 13,
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
    width: Dimensions.get('window').width / 10 * 9,
    marginBottom: Dimensions.get('window').height / 15,
    height: Dimensions.get('window').height / 14,
    flexDirection: 'row',
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: Dimensions.get('window').height / 100 * 8,
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
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
    marginTop: Dimensions.get('window').height / 15,
    marginLeft: Dimensions.get('window').width / 18,
  },
});
