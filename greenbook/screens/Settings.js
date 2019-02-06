import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

export class SettingsScreen extends React.Component {
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>settings</Text>
        </View>
        <View style={{ alignItems: 'center', marginTop: -30 }}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={ styles.vineImage }
          />
        </View>
        <View style={ styles.bodyBox }>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>notifications: {}</Text>
          <View style={{flexDirection:'row', justifyContent: 'space-between', marginRight: 10}}>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>name: {}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}
            >
              <Text style={this.state.fontLoaded ? styles.change : styles.justInCase }>change</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', justifyContent: 'space-between', marginRight: 10}}>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.justInCase }>username: {}</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Home')
              }}
            >
              <Text style={this.state.fontLoaded ? styles.change : styles.justInCase }>change</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={this.state.fontLoaded ? styles.passwordText : styles.justInCase }>change password</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'space-around', alignItems: 'center', marginTop: -30 }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.save : styles.else }>save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={ this.state.fontLoaded ? styles.home : styles.else }>home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    justifyContent: 'space-around',
  },
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
  },
  change: {
    fontFamily: 'source-code-pro',
    fontSize: 20,
    textDecorationLine: 'underline',
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
  home: {
    fontSize: 30,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  justInCase: {
    fontSize: 44,
  },
  passwordText: {
    fontFamily: 'source-code-pro',
    fontSize: 25,
    textDecorationLine: 'underline',
  },
  save: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
