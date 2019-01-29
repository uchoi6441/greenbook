import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "blue"}}>
        <View style={styles.headingBufferTop}>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>YEeeeET!</Text>
        </View>
        <View style={styles.headingBufferBottom}>
          <Text style={{fontSize: 20}}>subtitle here</Text>
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
    fontSize: 44,
  },
});
