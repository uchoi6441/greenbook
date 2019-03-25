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
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={ styles.headingBufferTop }/>
        <View style={ styles.heading }>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>about</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -20 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.bodyBox }>
          <View style={{flexDirection: 'row'}}>
            <Text style={this.state.fontLoaded ? styles.boxTradeText : styles.else }>trade</Text>
            <Text style={this.state.fontLoaded ? styles.boxRootsText : styles.else }>roots</Text>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }> is a textbook exchange app for </Text>
            <Text style={this.state.fontLoaded ? styles.greenText : styles.else}>Dartmouth</Text>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }> students. with </Text>
            <Text style={this.state.fontLoaded ? styles.boxTradeText : styles.else }>trade</Text>
            <Text style={this.state.fontLoaded ? styles.boxRootsText : styles.else }>roots</Text>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }> you can reduce your carbon footprint, buy books faster and for less money, and sell back your used textbooks!</Text>
          </View>
          <Text style={this.state.fontLoaded ? styles.boxTextSmall : styles.else }>send feedback to greenbook@gmail.com</Text>
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              navigate('Home')
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
    paddingTop: '5%',
    paddingLeft: Dimensions.get('window').width / 14,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').height / 10 * 4,
    marginTop: Dimensions.get('window').height / 100 * 2,
    height: Dimensions.get('window').height / 2,
  },
  boxRootsText: {
    fontFamily: 'libre-barcode',
    fontSize: 15,
  },
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
  },
  boxTextSmall: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
  },
  boxTradeText: {
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
    fontSize: 15,
  },
  else: {
    fontSize: 44,
  },
  greenText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 15,
    color: '#024C2E',
    justifyContent: 'center',
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
  textbookImage: {
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
