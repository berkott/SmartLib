// Firebase Keys and Other Identifiers
var config = {
  apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
  authDomain: "libraryapp-backend.firebaseapp.com",
  databaseURL: "https://libraryapp-backend.firebaseio.com",
  projectId: "libraryapp-backend",
  storageBucket: "libraryapp-backend.appspot.com",
  messagingSenderId: "617592398054"
};

// Initialize Firebase
firebase.initializeApp(config);

// Variable Set-Up
var database = firebase.database();
var storage = firebase.storage();
