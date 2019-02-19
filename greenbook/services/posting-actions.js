import firebase from 'firebase'

export function createPosting(posting) {
  return new Promise((resolve, reject) => {
    var user = firebase.auth().currentUser
    var PostRef = firebase.database().ref(`postings`).push()
    var PostKey = PostRef.key
    firebase.database().ref(`postings/${ PostKey }`).set({
      isbn: posting.isbn,
      course: posting.dept + " " + posting.numb,
      professor: posting.prof,
      user: user.uid,
    });
    firebase.database().ref(`users/${ user.uid }/postings/${ PostKey }`).set({
      "isbn" : posting.isbn,
      "course" : posting.dept + " " + posting.numb,
      "professor" : posting.prof,
    });
    firebase.database().ref(`books/${ posting.isbn }/${ PostKey }`).set({
      isbn: posting.isbn,
      course: posting.dept + " " + posting.numb,
      professor: posting.prof,
      user: user.uid,
    });
    resolve(true)
  })
}
