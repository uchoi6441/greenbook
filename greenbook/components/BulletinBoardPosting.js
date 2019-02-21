import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class BulletinBoardPosting extends React.Component {
  state = { fontLoaded: true };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          navigate(this.props.navigation)
        }}
        style={ styles.posting }
      >
        <Text style = { this.props.font ? styles.titleText : styles.buttonTextElse }>{ this.props.title }</Text>
        <View style={{flexDirection:'row'}}>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.edition }</Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>ed., </Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.publisher }</Text>
        </View>
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.author }</Text>
        <View style={{flexDirection:'row'}}>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>ISBN: </Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.ISBN }</Text>
        </View>
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.course }</Text>
        <View style={{flexDirection:'row'}}>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.quantity }</Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }> postings starting at $</Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.lowPrice }</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  posting: {
    justifyContent: 'flex-start',
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: Dimensions.get('window').height / 13,
    marginBottom: Dimensions.get('window').width / 9,
  },
  buttonText: {
    fontSize: 10,
    fontFamily: 'source-code-pro',
  },
  titleText: {
    fontSize: 10,
    fontFamily: 'source-code-pro',
    textDecorationLine: 'underline',
  },
  buttonTextElse: {
    fontSize: 10,
  },
});
