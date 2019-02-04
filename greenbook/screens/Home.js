import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Font } from 'expo';
import { StackNavigator } from 'react-navigation';

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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.headingBufferTop}/>
        <View style={styles.heading}>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>home</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('./../assets/images/vine.png')}
            style={styles.vineImage}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyFive: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  bookImage: {
    width: 125,
    height: 125,
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
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingLeft: '10%',
    flexWrap: 'wrap',
  },
  userInfoText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
    paddingRight: 5,
    paddingTop: '7%',
  },
  userInfoText2: {
    fontSize: 20,
    fontFamily: 'source-code-pro',
    paddingTop: '10%',
    alignItems: 'center',
  },
  vineImage: {
    transform: [{ rotate: '180deg'}],
  },
});
