import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>about</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.bodyBox }>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>greenbook is a textbook exchange app for Dartmouth students.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>reduce your carbon footpring, buy books faster and for less money!</Text>
          <Text style={this.state.fontLoaded ? styles.boxTextSmall : styles.justInCase }>send feedback to greenbook@gmail.com</Text>
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.save : styles.else }>home</Text>
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
  save: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  home: {
    fontSize: 30,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  body: {
    flexDirection: 'column',
    marginTop: '7%',
  },
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
  },
  boxTextSmall: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
  },
  passwordText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  change: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  continue: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  bodyBox: {
    paddingLeft: 10,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').height / 10 * 4,
    marginBottom: '10%',
    marginTop: '10%',
    height: '50%',
  },
  enter: {
    fontSize: 30,
    fontFamily: 'source-code-pro'
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
  textbookImage: {
    width: 100,
    height: 100,
  },
  castleImage: {
    width: 130,
    height: 130,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
