import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

export class AboutScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: true,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>about</Text>
        </View>
        <Transition shared='vine'>
        <View style={{ alignItems: 'center', marginTop: -20 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        </Transition>
        <View style={ styles.bodyBox }>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>greenbook is a textbook exchange app for Dartmouth students.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>reduce your carbon footprint, buy books faster and for less money!</Text>
          <Text style={this.state.fontLoaded ? styles.boxTextSmall : styles.else }>send feedback to greenbook@gmail.com</Text>
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.home : styles.else }>home</Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./../assets/images/econtextbook.png')}
              style={ styles.textbookImage }
            />
            <Image
              source={require('./../assets/images/physicstextbook.png')}
              style={ styles.textbookImage }
            />
            <Image
              source={require('./../assets/images/govtextbook.png')}
              style={ styles.textbookImage }
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyBox: {
    paddingTop: Dimensions.get('window').width / 12,
    paddingLeft: Dimensions.get('window').width / 12,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').height / 10 * 4,
    marginBottom: '10%',
    marginTop: '10%',
    height: '50%',
  },
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
  },
  boxTextSmall: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
  },
  heading: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingBufferTop: {
    height: Dimensions.get('window').width / 8,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  home: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  else: {
    fontSize: 44,
  },
  textbookImage: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
