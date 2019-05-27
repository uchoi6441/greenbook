import React from 'react';
import firebase from 'firebase';
import moment from 'moment';

export function getRef() {
  return firebase.database().ref('messages');
}

export function observeAuth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  })
}

export function on() {
  return new Promise((resolve, reject) => {
    getRef()
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
    resolve(true)
  })
}

export function parse() {
  return new Promise((resolve, reject) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;

    const timestamp = new Date(numberStamp);

    const message = {
      _id,
      timestamp,
      text,
      user,
    };
    resolve(message)
  })
}

export function getUid() {
  return (firebase.auth().currentUser || {}).uid;
}

export function getName() {
  return (firebase.auth().currentUser || {}).name;
}

export function getTimestamp() {
  return firebase.database.ServerValue.TIMESTAMP;
}

export function send(message) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
    resolve(message)
  })
};

export function append(message) {
  this.ref.push(message)
}

export function off() {
    this.ref.off();
}
