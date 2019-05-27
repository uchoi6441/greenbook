import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class TrendingSearches extends React.Component {
  state = { fontLoaded: true };
  render() {
    return (
      <TouchableOpacity
        style={ styles.trendingButtons }
      >
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.item }</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    fontFamily: 'source-code-pro',
  },
  trendingButtons: {
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    width: Dimensions.get('window').width / 10 * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextElse: {
    fontSize: 15,
  },
});
