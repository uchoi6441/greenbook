import firebase from 'firebase'
import moment from 'moment';


export function createPosting(posting) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var PostRef = firebase.database().ref(`postings`).push()
    var PostKey = PostRef.key
    var postingUpdate = {}
    postingUpdate[`postings/${ PostKey }`] = {
      isbn: posting.isbn,
      course: posting.dept + " " + posting.numb,
      professor: posting.prof,
      price: posting.price,
      timestamp: moment().format('MM/DD/YY'),
      key: PostKey,
      user: user.uid,
    };
    postingUpdate[`books/${ posting.isbn }/${ PostKey }`] = {
      isbn: posting.isbn,
      course: posting.dept + " " + posting.numb,
      professor: posting.prof,
      price: posting.price,
      timestamp: moment().format('MM/DD/YY'),
      key: PostKey,
      user: user.uid,
    };
    postingUpdate[`users/${ user.uid }/postings/${ PostKey }`] = {
      isbn : posting.isbn,
      course : posting.dept + " " + posting.numb,
      professor : posting.prof,
      timestamp: moment().format('MM/DD/YY'),
      key: PostKey,
      price:posting.price,
    };
    firebase.database().ref().update(postingUpdate);
    resolve(true)
  })
}

export function getMyPostings() {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    var postings = []
    firebase.database().ref(`users/${uid}/postings`).once('value').then(snapshot => {
      snapshot.forEach(function(childSnapshot) {
        postings.push(childSnapshot.val())
      });
      resolve(postings)
    })
  })
}

export function deletePosting(postkey, isbn) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    var updates = {
      ['users/'+uid+'/postings/'+postkey]: null,
      ['postings/'+postkey]: null,
      ['books/' +isbn+'/'+postkey]: null
    }
    firebase.database().ref().update(updates);
    resolve(true)
  })
}
