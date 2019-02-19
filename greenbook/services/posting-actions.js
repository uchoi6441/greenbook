import firebase from 'firebase'

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
      user: user.uid,
    };
    postingUpdate[`books/${ posting.isbn }/${ PostKey }`] = {
      isbn: posting.isbn,
      course: posting.dept + " " + posting.numb,
      professor: posting.prof,
      user: user.uid,
    };
    postingUpdate[`users/${ user.uid }/postings/${ PostKey }`] = {
      isbn : posting.isbn,
      course : posting.dept + " " + posting.numb,
      professor : posting.prof,
    };
    firebase.database().ref().update(postingUpdate);
    resolve(true)
  })
}
