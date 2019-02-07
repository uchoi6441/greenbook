import firebase from 'firebase'

export function createAccount(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
      resolve(true)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
      } else {
      alert(errorMessage);
      }
      console.log(error);
      reject(false)
    });
  })
}

export function verifyAccount(email, password) {
  return new Promise((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
      resolve(true)
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      reject(false)
    });
  })
}
