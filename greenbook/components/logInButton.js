import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import firebase from 'firebase';
import { generateUserKey, createUser } from './../services/user-actions';

export default class LogInButton extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
          firebase.auth().signInWithEmailAndPassword(this.props.username, this.props.password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
          navigate(this.props.destination)
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
