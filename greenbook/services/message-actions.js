import firebase from 'firebase'

export function getMessages() {
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
