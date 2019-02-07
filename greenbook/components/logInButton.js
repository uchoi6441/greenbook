import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import firebase from 'firebase';
import { generateUserKey, createUser } from './../services/user-actions';
import { createAccount, verifyAccount } from './../services/database-actions';


export default class LogInButton extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
          verifyAccount(this.props.username, this.props.password).then((result) => {
            navigate(this.props.destination)
          })
        }}
        style={ styles.button }
      >
        <Text style = { this.props.font ? styles.buttonText : styles.buttonTextElse }>
          { this.props.text }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontFamily: 'gloria-hallelujah',
    fontSize: 44,
    color: '#024C2E',
  },
  buttonTextElse: {
    fontSize: 44,
    color: '#024C2E',
  },
});
