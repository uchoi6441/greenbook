import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class BulletinBoardPosting extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    var quantity = Object.keys(this.props.postings).length;
    return (
      <TouchableOpacity
        onPress={() => {
          navigate("Home")
        }}
        style={ styles.posting }
      >
        <Text style = { this.props.font ? styles.titleText : styles.buttonTextElse }>{ this.props.title }</Text>
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.author }</Text>
        <View style={{flexDirection:'row'}}>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>ISBN: </Text>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{ this.props.isbn }</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>{quantity} posting(s) starting at $</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  posting: {
    justifyContent: 'flex-start',
    backgroundColor: '#E4E4E4',
    paddingLeft: Dimensions.get('window').width / 20,
    paddingBottom: Dimensions.get('window').height / 100,
    paddingTop: Dimensions.get('window').height / 100,
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'source-code-pro',
  },
  titleText: {
    fontSize: 20,
    fontFamily: 'source-code-pro',
    textDecorationLine: 'underline',
  },
  buttonTextElse: {
    fontSize: 15,
  },
});
