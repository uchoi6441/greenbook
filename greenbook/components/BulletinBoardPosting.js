import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';

export default class BulletinBoardPosting extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
          navigate(this.props.destination)
        }}
        style={ styles.posting }
      >
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>
          { this.props.text }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  posting: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#E4E4E4',
    width: '100%',
    height: Dimensions.get('window').height / 13,
    marginBottom: Dimensions.get('window').width / 9,
  },
  buttonText: {
    fontSize: 30,
    fontFamily: 'source-code-pro',
  },
  buttonTextElse: {
    fontSize: 30,
  },
});
