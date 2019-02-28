import firebase from 'firebase'
import { createUser } from './../services/user-actions'

export function createAccount(name, username, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(username, password).then(function() {
      var user = firebase.auth().currentUser
      var uid = user.uid
      createUser({id: uid, name: name, username: username, password: password }).then((result) => {
        resolve(true)
      })
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
      alert('The password is too weak. Passwords must be at least 6 characters long.');
      } else {
      alert(errorMessage);
      }
      console.log(error);
      reject(false)
    });
  })
}

export function verifyAccount(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      resolve(true)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      reject(false)
    });
  })
}
