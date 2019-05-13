import firebase from 'firebase';
import moment from 'moment';

export function isbnLookup(isbn) {
  return new Promise((resolve, reject) => {
    let headers = {
    "Content-Type": 'application/json',
    "X-API-Key": 'jnqd6k8zNGaHqOmBOAwWX1KJeta8iPx6DzZKit4b'
    }
    fetch(`https://api.isbndb.com/book/${ isbn }`, {headers: headers})
        .then(response => {
            resolve(response.json());
        })
        .catch(error => {
            console.error('Error:', error)
        });
  })
}

export function createPosting(posting) {
  return new Promise((resolve, reject) => {
    isbnLookup(posting.isbn).then((result) => {
      var user = firebase.auth().currentUser
      var PostRef = firebase.database().ref(`postings`).push()
      var PostKey = PostRef.key
      var postingUpdate = {}
      var book = result.book
      console.log(book.edition)
      postingUpdate[`postings/${ PostKey }`] = {
        course: posting.dept + " " + posting.numb,
        professor: posting.prof,
        price: posting.price,
        title: book.title_long,
        author: book.authors,
        isbn: book.isbn,
        isbn13: book.isbn13,
        timestamp: moment().format('MM/DD/YY'),
        key: PostKey,
        user: user.uid,
      };
      postingUpdate[`books/${ book.isbn }/${ PostKey }`] = {
        course: posting.dept + " " + posting.numb,
        professor: posting.prof,
        price: posting.price,
        title: book.title_long,
        author: book.authors,
        isbn: book.isbn,
        isbn13: book.isbn13,
        timestamp: moment().format('MM/DD/YY'),
        key: PostKey,
        user: user.uid,
      };
      postingUpdate[`users/${ user.uid }/postings/${ PostKey }`] = {
        course : posting.dept + " " + posting.numb,
        professor : posting.prof,
        price: posting.price,
        title: book.title_long,
        author: book.authors,
        isbn: book.isbn,
        isbn13: book.isbn13,
        timestamp: moment().format('MM/DD/YY'),
        key: PostKey,
      };
      firebase.database().ref().update(postingUpdate);
      resolve(true)
    })
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
