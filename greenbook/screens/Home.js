import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeOptions from './../components/HomeOptions';

export class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
      text: '',
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'gloria-hallelujah': require('./../assets/fonts/GloriaHallelujah.ttf'),
      'libre-barcode': require('./../assets/fonts/LibreBarcode128Text-Regular.ttf'),
      'source-code-pro': require('./../assets/fonts/SourceCodePro-Light.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>home</Text>
        </View>
        <View style={{ justifyContent: 'center' }}>
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
          <Image
            source={require('./../assets/images/settings.png')}
            style={ styles.settingsImage }
          />
          <Image
            source={require('./../assets/images/cottage.png')}
            style={ styles.cottageImage }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
  },
  bottomImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  heading: {
    height: '12%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferBottom: {
    height: '6%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  buttonText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
    paddingRight: 5,
    paddingTop: '7%',
  },
  cottageImage: {
    width: 100,
    height: 100,
    marginRight: 40,
  },
  settingsImage: {
    width: 60,
    height: 60,
    marginLeft: 40,
  },
  vineImage: {
    justifyContent: 'center',
    transform: [{ rotate: '180deg'}],
  },
});
