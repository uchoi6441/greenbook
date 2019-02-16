import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeOptions from './../components/HomeOptions';

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
    };
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>home</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.body }>
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'find' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'sell' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'my postings' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'messages' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
          />
        </View>
        <View style={ styles.bottomImages }>
          <TouchableOpacity onPress={() =>
            navigate('Settings')
            }
          >
            <Image source = { require('./../assets/images/settings.png') } style = { styles.settingsImage }/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>
            navigate('About')
            }
          >
            <Image source = { require('./../assets/images/about.png') } style = { styles.aboutImage }/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutImage: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    marginLeft: Dimensions.get('window').width / 10,
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
    marginTop: '30%',
  },
  bottomImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50,
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: '8%',
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
  settingsImage: {
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    marginRight: Dimensions.get('window').width / 10,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
