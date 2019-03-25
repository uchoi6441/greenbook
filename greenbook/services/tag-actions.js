import firebase from 'firebase'
import moment from 'moment';

export function createTag(tag) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var TagRef = firebase.database().ref(`tags`).push()
    var TagKey = TagRef.key
    var TagUpdate = {}
    tagUpdate[`tags/${ TagKey }`] = {
      item: tag.item,
      timestamp: moment().format('MM/DD/YY'),
      key: TagKey,
      user: user.uid,
    };
    tagUpdate[`users/${ user.uid }/tags/${ TagKey }`] = {
      item: tag.item,
      timestamp: moment().format('MM/DD/YY'),
      key: TagKey,
    };
    firebase.database().ref().update(tagUpdate);
    resolve(true)
  })
}

export function getMyTags() {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    var tags = []
    firebase.database().ref(`users/${uid}/tags`).once('value').then(snapshot => {
      snapshot.forEach(function(childSnapshot) {
        tags.push(childSnapshot.val())
      });
      resolve(tags)
    })
  })
}

export function deleteTag(tagkey) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    var updates = {
      ['users/'+uid+'/tags/'+tagkey]: null,
      ['tags/'+tagkey]: null,
    }
    firebase.database().ref().update(updates);
    resolve(true)
  })
}
