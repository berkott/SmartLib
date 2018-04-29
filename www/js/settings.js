var showPrompt = function() {
  var time = Date.now();
  var ref = storageRef.child('BugReports/report' + time + '.txt');
  ons.notification.prompt('Please tell us about any bugs and we will fix them as soon as possible.')
    .then(function(input) {
      var message = input;
      if (message) {
        ref.putString(message).then(function(snapshot) {
          // successToast.toggle();
          ons.notification.toast('Thank you for your feedback!', {
            timeout: 2000
          });
          console.log('Uploaded a raw string!');
        });
      }
    });
};

var logOut = function() {
  var fb = firebase.auth();
  firebase.auth().signOut().then(function() {
    ons.notification.toast('Logged Out!', {
            timeout: 2000
    });
    console.log('Signed Out');
    
  }, function(error) {
    ons.notification.toast('Logout Error', error, {
            timeout: 2000
    });
    console.error('Sign Out Error', error);
  });
}
