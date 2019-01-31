import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class templateFive extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.headingBufferTop}>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>YEET!</Text>
        </View>
        <View style={styles.headingBufferBottomFive}>
          <Text style={{fontSize: 20}}>subtitle here</Text>
        </View>
        <View style={styles.bodyFive}>
          <Text style={{fontSize: 20}}>body here</Text>
        </View>
        <View style={styles.footerFive}>
          <Text style={{fontSize: 20}}>bottom here</Text>
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
  headingBufferBottomFive: {
    height: '5%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 44,
  },
  bodyFive: {
    height: '60%',
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerFive: {
    height: '15%',
    width: '100%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
