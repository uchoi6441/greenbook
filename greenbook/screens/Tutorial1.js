import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import HomeOptions from './../components/HomeOptions';

export class Tutorial1Screen extends React.Component {
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
            <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>home</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: -30 }}>
            <Image
              source={require('./../assets/images/vine.png')}
              style={ styles.vineImage }
            />
          </View>
          <View style={ styles.body }>
            <Text style={{fontSize: 20, fontFamily: 'gloria-hallelujah', color: '#024C2E'}}>SELL your used textbook</Text>
            <View style={{flexDirection: 'row'}}>
              <Image source = { require('./../assets/images/arrow.png') } style = { styles.arrowImage }/>
              <View style={styles.homeOptions}>
                <Text style = { this.state.fontLoaded ? styles.homeOptionsText : styles.else }>sell</Text>
              </View>
            </View>
            <View style={styles.homeOptions}>
              <Text style = { this.state.fontLoaded ? styles.homeOptionsText : styles.else }>find</Text>
            </View>
            <View style={styles.homeOptions}>
              <Text style = { this.state.fontLoaded ? styles.homeOptionsText : styles.else }>messages</Text>
            </View>
            <View style={styles.homeOptions}>
              <Text style = { this.state.fontLoaded ? styles.homeOptionsText : styles.else }>my postings</Text>
            </View>
          </View>
          <View style={ styles.bottomImages }>
            <TouchableOpacity onPress={() =>
              navigate('Tutorial2')
              }
            >
              <Text style={styles.next}>continue tutorial</Text>
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
  arrowImage: {
    width: 40,
    height: 40,
  },
  body: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignContent: 'space-between',
    marginTop: Dimensions.get('window').height / 100 * 2,
  },
  bottomImages: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  homeOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    borderWidth: 2,
    width: Dimensions.get('window').width / 10 * 8,
    height: Dimensions.get('window').height / 13,
    marginBottom: Dimensions.get('window').width / 9,
  },
  homeOptionsText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
  },
  else: {
    fontSize: 44,
  },
  next: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
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
