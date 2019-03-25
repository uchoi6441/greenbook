import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
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
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.else }>trade</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.else }>roots</Text>
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
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>youve successfully made a traderoots account.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>traderoots is a textbook exchange app for Dartmouth students.</Text>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>traderoots helps Dartmouth students buy cheaper textbooks, sell back their used books, and save the environment at the same time!</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>join our </Text>
            <Text style={this.state.fontLoaded ? styles.greenText : styles.else}>~green~</Text>
            <Text style={this.state.fontLoaded ? styles.boxText : styles.else }> community by</Text>
          </View>
          <Text style={this.state.fontLoaded ? styles.boxText : styles.else }>walking through the tutorial now!</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() =>
            navigate('Tutorial1')
            }
          >
            <Text style={styles.next}>start tutorial</Text>
          </TouchableOpacity>
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
  boxText: {
    fontFamily: 'source-code-pro',
    fontSize: 15,
  },
  greenText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 15,
    color: '#024C2E',
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
  else: {
    fontSize: 15,
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
    marginLeft: -12,
  },
});
