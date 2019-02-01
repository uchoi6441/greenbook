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
      'source-code-pro': require('./assets/fonts/SourceCodePro-Regular.ttf'),
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
            style={styles.vine}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vine}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vine}
          />
          <Image
            source={require('./assets/images/vine.png')}
            style={styles.vine}
          />
        </View>
        <View style={styles.headingBufferBottomFive}>
          <Text style={{fontSize: 20}}>username:</Text>
          <Text style={{fontSize: 20}}>password:</Text>
        </View>
        <View style={styles.bodyFive}>
          <Text style={{fontSize: 25}}>log in</Text>
          <Text style={{fontSize: 20}}>sign up</Text>
        </View>
        <View style={styles.footerFive}>
          <Text style={{fontSize: 20}}>bottom here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyFive: {
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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
  headingBufferTop: {
    height: '8%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingBufferBottom: {
    height: '6%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingBufferBottomFive: {
    height: '5%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  headingText: {
    fontSize: 35,
    fontFamily: 'gloria-hallelujah',
    color: '#024C2E',
  },
  subheadingText: {
    fontSize: 70,
    marginTop: -16,
    fontFamily: 'libre-barcode',
  },
  justInCase: {
    fontSize: 44,
  },
  vine: {
    marginLeft: -5,
  },
});
