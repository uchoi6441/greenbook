import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { Font } from 'expo';
import HomeOptions from './../components/HomeOptions';
import { FluidNavigator } from 'react-navigation-fluid-transitions';


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
        <View style={{justifyContent: 'flex-start', marginTop: Dimensions.get('window').height / 25, marginLeft: Dimensions.get('window').width / 15, marginRight: Dimensions.get('window').width / 15 }}>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigate("LogIn")
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.logOut : styles.else}>log out</Text>
          </TouchableOpacity>
          <View style={styles.environment}>
            <View style={{flexDirection: 'column'}}>
              <Text style={ this.state.fontLoaded ? styles.environmentText : styles.else }>Each traded book reduces</Text>
              <Text style={ this.state.fontLoaded ? styles.environmentText : styles.else }>packaging waste, CO2 emissions,</Text>
              <Text style={ this.state.fontLoaded ? styles.environmentText : styles.else }>and shipping costs! meet friends, save money, reduce carbon footprint</Text>
            </View>
            <Image
              source={require('./../assets/images/pine.png')}
              style={styles.pineImage}
            />
          </View>
          </View>
        </View>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>home</Text>
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
            text = { 'sell' }
            navigation = { this.props.navigation }
            destination = { 'MakePosting' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'find' }
            navigation = { this.props.navigation }
            destination = { 'BulletinBoard' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'messages' }
            navigation = { this.props.navigation }
            destination = { 'Home' }
          />
          <HomeOptions
            font = { this.state.fontLoaded }
            text = { 'my postings' }
            navigation = { this.props.navigation }
            destination = { 'MyPostings' }
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
  else: {
    fontSize: 44,
  },
  environment: {
    justifyContent: 'flex-end',
  },
  environmentText: {
    fontSize: 10,
    fontFamily: 'source-code-pro',
  },
  heading: {
    height: Dimensions.get('window').height / 100 * 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: Dimensions.get('window').height / 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  logOut: {
    fontSize: 15,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  pineImage: {
    width: 14.6*1.3,
    height: 29.4*1.3,
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
