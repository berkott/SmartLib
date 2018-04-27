// // Create a root reference
// var storageRef = firebase.storage().ref();

// // Create a reference to 'mountains.jpg'
// var mountainsRef = storageRef.child('mountains.jpg');

// // Create a reference to 'images/mountains.jpg'
// var mountainImagesRef = storageRef.child('images/mountains.jpg');

var showPrompt = function() {
  ons.notification.prompt('Please tell us about any bugs and we will fix them as soon as possible.')
    .then(function(input) {
      var message = input;
      ref.putString(message).then(function(snapshot) {
        console.log('Uploaded a raw string!');
      });
    });
};
