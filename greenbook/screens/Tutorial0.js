import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';
import HomeOptions from './../components/HomeOptions';

export class Tutorial0Screen extends React.Component {
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
        <View style={styles.headingBufferTop}/>
        <View style={styles.heading}>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>green</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.else }>book</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: Dimensions.get('window').height / 100 * 7}}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
        </View>
        <View style={ styles.bodyBox }>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>congratulations!</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>youve successfully made a greenbook account.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>greenbook is a textbook exchange app for Dartmouth students.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>greenbook helps Dartmouth students buy cheaper textbooks, sell back their used books, and save the environment at the same time!</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>join our </Text>
            <Text style={this.state.fontloaded ? styles.greenText : styles.else}>~green~</Text>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }> community by taking the tutorial now!</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() =>
          navigate('Tutorial1')
          }
        >
          <Text style={styles.next}>start tutorial</Text>
        </TouchableOpacity>
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
    fontSize: 15,
  },
  greenText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 15,
    color: '#024C2E',
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
  else: {
    fontSize: 44,
  },
  next: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  subheadingText: {
    fontSize: 70,
    marginTop: -16,
    fontFamily: 'libre-barcode',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});