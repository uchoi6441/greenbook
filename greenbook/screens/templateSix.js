import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class templateSix extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={styles.headingBufferTop}>
        </View>
        <View style={styles.heading}>
          <Text style={styles.headingText}>YEET!</Text>
        </View>
        <View style={styles.headingBufferBottomSix}>
          <Text style={{fontSize: 20}}>subtitle here</Text>
        </View>
        <View style={styles.bodySix}>
          <Text style={{fontSize: 20}}>body here</Text>
        </View>
        <View style={styles.footerSix}>
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
  headingBufferBottomSix: {
    height: '5%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingText: {
    fontSize: 44,
  },
  bodySix: {
    height: '52%',
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footerSix: {
    height: '23%',
    width: '88%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
