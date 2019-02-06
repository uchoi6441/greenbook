import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import firebase from 'firebase';
import { generateUserKey, createUser } from './../services/user-actions';

export default class SignUpButton extends React.Component {
  state = { fontLoaded: true };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        onPress={() => {
          firebase.auth().createUserWithEmailAndPassword(this.props.username, this.props.password).then(function(this.props) {
            console.log(this.error)
            navigate(this.destination)
            generateUserKey().then((key) => {
              myKey = key
              const user = { id: myKey, name: this.props.name, username: this.props.username, password: this.props.password }
              createUser(user)
            })
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
            } else {
            alert(errorMessage);
            }
            console.log(error);
            });
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
