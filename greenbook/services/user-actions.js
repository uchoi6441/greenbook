import firebase from "firebase"
import * as firebaseConfig from './../services/firebase-config'
import moment from 'moment'


export function createUser(user) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`users/${ user.id }`).set({
      id: user.id,
      //name: user.name,
      username: user.username,
      password: user.password,
    });
    resolve(true)
  })
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`users/${id}`).once('value').then(snapshot => {
      resolve(snapshot.val())
    });
  })
}

export function generateUserKey() {
  return new Promise((resolve, reject) => {
    var key = firebase.database().ref().child('users').push().key
    console.log(key)
    resolve(key)
  })
}
