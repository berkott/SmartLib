// This is a JavaScript file

var databaseReference = firebase.database();

function searchBooks(queryText) {
  databaseReference.ref('list').orderByChild('longTitle').startAt(queryText).endAt(queryText+"\uf8ff").once("value")
};
