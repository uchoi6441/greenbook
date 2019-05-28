import React from 'react';
import firebase from 'firebase';
import moment from 'moment';
import { GiftedChat } from 'react-native-gifted-chat';

export function getRef() {
  return firebase.database().ref('messages');
}

export function observeAuth() {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(onAuthStateChanged);
  })
}

export function onAuthStateChanged(user) {
    if (!user) {
      try {
        // 4.
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        alert(message);
      }
    }
};

export function on() {
  return new Promise((resolve, reject) => {
    getRef()
      .limitToLast(20)
      .on('child_added', snapshot => callback(parse(snapshot)));
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

export function append(messages) {
  return new Promise((resolve, reject) => {
    console.log(messages)
    firebase.database().ref(`messages`).set(messages)
    resolve(true)
  })
}

export function send(messages) {
  return new Promise((resolve, reject) => {
    const newMessages = messages.map((message) => {
      message.timestamp = getTimestamp();
      // const { text, user } = message;
      // const newMessage = {
      //     text,
      //     user,
      //     timestamp: getTimestamp(),
      //   };
      return message;
    })
    append(newMessages);
    resolve('Sent!');
  })
};

export function off() {
    getRef().off();
}
