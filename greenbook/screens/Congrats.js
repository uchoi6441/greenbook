import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class CongratsScreen extends React.Component {
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>congratulations</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.bodyBox }>
          <Text style={this.state.fontLoaded ? styles.boxTitle : styles.justInCase }>"you've completed a sale!"</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>text</Text>
        </View>
        <View style={{flexDirection:'row', justifyContent: 'space-around' }}>
          <View>
            <Image
              source={require('./../assets/images/castle.png')}
              style={ styles.castleImage }
            />
          </View>
          <View style={{justifyContent: 'center', alignItems: 'flex-end', marginRight: '10%' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}
            >
              <Text style={ this.state.fontLoaded ? styles.home : styles.else }>home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  body: {
    flexDirection: 'column',
    marginTop: '7%',
  },
  boxTitle: {
    fontSize: 25,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
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
    alignItems: 'center',
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
  castleImage: {
    width: 130,
    height: 130,
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
