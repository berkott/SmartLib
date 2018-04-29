var config = {
  apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
  authDomain: "libraryapp-backend.firebaseapp.com",
  databaseURL: "https://libraryapp-backend.firebaseio.com",
  projectId: "libraryapp-backend",
  storageBucket: "libraryapp-backend.appspot.com",
  messagingSenderId: "617592398054"
};
firebase.initializeApp(config);

var database = firebase.database();
var storage = firebase.storage();
