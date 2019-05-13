import firebase from 'firebase';
import Chatkit from '@pusher/chatkit-server';
import moment from 'moment';

export function createChatUser(){
  return new Promise((resolve, reject) => {
    chatkit.createUser({
      id: 'Jenny',
      name: '12345',
    })
      .then(() => {
        console.log('User created successfully');
      }).catch((err) => {
        console.log(err);
      });
    var user = firebase.auth().currentUser
    var ChatRef = firebase.database().ref(`chats`).push()
    var ChatKey = ChatRef.key
    var chatUpdate = {}
    chatUpdate[`chats/${ ChatKey }`] = {
      timestamp: moment().format('MM/DD/YY'),
      key: ChatKey,
      user: user.uid,
    };
    chatUpdate[`users/${ user.uid }/chats/${ ChatKey }`] = {
      timestamp: moment().format('MM/DD/YY'),
      key: ChatKey,
    };
    firebase.database().ref().update(chatUpdate);
    resolve(true)
  })
}

export function getMessages() {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    var chats = []
    firebase.database().ref(`users/${uid}/chats`).once('value').then(snapshot => {
      snapshot.forEach(function(childSnapshot) {
        tags.push(childSnapshot.val())
      });
      resolve(chats)
    })
  })
}
