(window.onload = function() {
  var config = {
    apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
    authDomain: "libraryapp-backend.firebaseapp.com",
    databaseURL: "https://libraryapp-backend.firebaseio.com",
    projectId: "libraryapp-backend",
    storageBucket: "libraryapp-backend.appspot.com",
    messagingSenderId: "617592398054"
  };
  firebase.initializeApp(config);

  // var storage = firebase.storage();
  // var storageRef = storage.ref();
  // var imagesRef = storageRef.child('map.jpg');

  // storageRef.child('map.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element:
  //   var img = document.getElementById('mapimg');
  //   img.src = url;
  // }).catch(function(error) {
  //   // Handle any errors
  // });
  // // console.log("ran");
  // // document.getElementById("Map").innerHTML = '<img src="imagesRef" alt="Test School Map" style="width: 100%; height: 100% " data-elem="pinchzoomer">';
  // // var userId = firebase.auth().currentUser.uid;
  // // return firebase.database().ref('/persons/' + userId).once('value').then(function(snapshot) {
  // //   var yea = (snapshot.val() && snapshot.val().role) || 'Anonymous';
	// // 	console.log(yea);
  // // });
  // //     btnAddBook.addEventListener('click', e=>{
  // //       addNewBook('test', '12345', 'onHold', user);
  // //     });
  //
  // //     function addNewBook(bookTitle2, isbn2, status2, whoOwnsIt2) {
  // //       console.log("Adding book!");
  // //       firebase.database().ref('book/1234').set({
  // //         bookTitle: bookTitle2,
  // //         isbn: isbn2,
  // //         status: status2,
  // //         whoOwnsIt: whoOwnsIt2
  // //       });
  // //     }
// });
});