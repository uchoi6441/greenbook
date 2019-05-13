import firebase from 'firebase'
import moment from 'moment';

var contactsRef = firebase.database().ref("/books");
var algoliasearch = require('algoliasearch');
contactsRef.on('child_added', addOrUpdateIndexRecord);
contactsRef.on('child_changed', addOrUpdateIndexRecord);
contactsRef.on('child_removed', deleteIndexRecord);
const algoliasearch = require('algoliasearch');
const client = algoliasearch("P9LKM9IWML", "41b06325003d00a6bb7650a9d64a7c00");
const ALGOLIA_POSTS_INDEX_NAME = 'books';
const index = client.initIndex(ALGOLIA_POSTS_INDEX_NAME);

function addOrUpdateIndexRecord(dataSnapshot) {
  // Get Firebase object
  var firebaseObject = dataSnapshot.val();
  // Specify Algolia's objectID using the Firebase object key
  firebaseObject.objectID = dataSnapshot.key;
  // Add or update object
  index.saveObject(firebaseObject, function(err, content) {
    if (err) {
      throw err;
    }
    console.log('Firebase<>Algolia object saved', firebaseObject.objectID);
  });
}

function deleteIndexRecord(dataSnapshot) {
  // Get Algolia's objectID from the Firebase object key
  var objectID = dataSnapshot.key;
  // Remove the object from Algolia
  index.deleteObject(objectID, function(err, content) {
    if (err) {
      throw err;
    }
    console.log('Firebase<>Algolia object deleted', objectID);
  });
}

export function isbnLookup(isbn) {
  return new Promise((resolve, reject) => {
    let headers = {
    "Content-Type": 'application/json',
    "Authorization": '40924_8a1998552b220f9eab4980d9d18c4dcd'
    }
    fetch(`https://api2.isbndb.com/book/${ isbn }?with_prices=1`, {headers: headers})
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
      console.log(book);
      for (var i = 0, len = book.prices.length; i < len; i++) {
        if (book.prices[i].merchant == "Amazon Mkt New") {
          var amazonprice = book.prices[i].price;
        }
      }
      console.log(amazonprice);
      postingUpdate[`postings/${ PostKey }`] = {
        course: posting.dept + " " + posting.numb,
        price: posting.price,
        title: book.title_long,
        author: book.authors,
        isbn: book.isbn,
        isbn13: book.isbn13,
        timestamp: moment().format('MM/DD/YY'),
        key: PostKey,
        user: user.uid,
      };
      getBook(book.isbn).then((result) => {
        var bookUpdate = {}
        var bookPostingUpdate = {}
        if (result == null) {
          bookUpdate[`books/${ book.isbn13 }`] = {
            amazonprice: amazonprice,
            title: book.title_long,
            author: book.authors,
            isbn: book.isbn,
            isbn13: book.isbn13,
            postings: {
              [PostKey]: {
                course: posting.dept + " " + posting.numb,
                price: posting.price,
                timestamp: moment().format('MM/DD/YY'),
                key: PostKey,
                user: user.uid,
              }
            }
          };
        } else {
          bookUpdate[`books/${ book.isbn13 }/postings/${ PostKey }`] = {
            course: posting.dept + " " + posting.numb,
            price: posting.price,
            timestamp: moment().format('MM/DD/YY'),
            key: PostKey,
            user: user.uid,
          };
        }
        firebase.database().ref().set(bookUpdate);
      });
      postingUpdate[`users/${ user.uid }/postings/${ PostKey }`] = {
        course : posting.dept + " " + posting.numb,
        price: posting.price,
        amazonprice: amazonprice,
        title: book.title_long,
        author: book.authors,
        isbn: book.isbn,
        isbn13: book.isbn13,
        timestamp: moment().format('MM/DD/YY'),
        key: PostKey,
      };
      firebase.database().ref().update(postingUpdate);
      resolve(amazonprice)
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

export function getPosting(PostKey) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var uid = user.uid
    firebase.database().ref(`users/${uid}/postings/${PostKey}`).once('value').then(snapshot => {
      resolve(snapshot.val())
    })
  })
}

export function getBook(isbn) {
  return new Promise((resolve, reject) => {
    firebase.database().ref(`books/${isbn}`).once('value').then(snapshot => {
      resolve(snapshot.val())
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
      ['books/'+isbn+'/postings/'+postkey]: null,
    }
    firebase.database().ref().update(updates);
    getBook(isbn).then((result) => {
      if (result.postings == null) {
        var bookUpdate = {
          ['books/'+isbn]: null,
        }
      }
      firebase.database().ref().update(bookUpdate);
    });
    resolve(true)
  })
}
