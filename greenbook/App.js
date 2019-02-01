import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'gloria-hallelujah': require('./assets/fonts/GloriaHallelujah.ttf'),
      'libre-barcode': require('./assets/fonts/LibreBarcode128Text-Regular.ttf'),
      'source-code-pro': require('./assets/fonts/SourceCodePro-Light.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.headingBufferTop}/>
        <View style={styles.heading}>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>green</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.justInCase }>book</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: '10%'}}>
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage}
          />
        </View>
        <View style={styles.headingBufferBottomFive}>
          <Text style={ this.state.fontLoaded ?  styles.userInfo : styles.justInCase }>username:</Text>
          <Text style={ this.state.fontLoaded ?  styles.userInfo : styles.justInCase }>password:</Text>
        </View>
        <View style={styles.bodyFive}>
          <Text style={ this.state.fontLoaded ?  styles.logIn : styles.justInCase }>log in</Text>
          <Text style={ this.state.fontLoaded ?  styles.signUp : styles.justInCase }>sign up</Text>
        </View>
        <View style={{flexDirection: 'row', paddingTop: '10%'}}>
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage2}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vineImage2}
          />
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Image
            source={require('./assets/images/book.png')}
            style={styles.bookImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyFive: {
    //height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookImage: {
    width: 100,
    height: 100,
  },
  footerFive: {
    height: '15%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  headingBufferBottomFive: {
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
  logIn: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 44,
    color: '#024C2E',
  },
  signUp: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 28,
    color: '#024C2E',
  },
  subheadingText: {
    fontSize: 70,
    marginTop: -16,
    fontFamily: 'libre-barcode',
  },
  userInfo: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
  },
  vineImage: {
    marginLeft: -10,
  },
  vineImage2: {
    marginLeft: -10,
    transform: [{ rotate: '180deg'}],
  },
});
