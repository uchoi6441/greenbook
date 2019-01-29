import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      'libre-barcode': require('./assets/fonts/LibreBarcode128Text-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "blue"}}>
        <View style={styles.headingBufferTop}>
        </View>
        <View style={styles.heading}>
          <Text style={ this.state.fontLoaded ? styles.headingText : styles.justInCase }>green</Text>
          <Text style={ this.state.fontLoaded ? styles.subheadingText : styles.justInCase }>book</Text>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
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
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingBufferBottom: {
    height: '6%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
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
});
