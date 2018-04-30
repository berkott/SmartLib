var showPrompt = function() {
  var time = Date.now();
  var storageRef = storage.ref();
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
        });
      }
    });
};

var logOut = function() {
  var fb = firebase.auth();
  firebase.auth().signOut().then(function() {
    ons.notification.toast('Logged Out', {
            timeout: 2000
    });
    location.reload(20)
    console.log('Signed Out');

  }, function(error) {
    ons.notification.toast('Logout Error', error, {
            timeout: 2000
    });
    console.error('Sign Out Error', error);
  });
}

function checkFacebook() {
  appAvailability.check(
      'com.facebook.katana', // Package Name
      function () {           // Success callback
          window.plugins.socialsharing.shareViaFacebook(' your message here', null /* img */, ' http://www.yourwebsite.com/' /* url */, function () { console.log('share ok') }, function (errormsg) { alert(errormsg) })
      },
      function () {           // Error callback
          ons.notification.confirm({
              message: 'facebook is not installed. Do you want to install?',
              title: 'Facebook unavailable',
              buttonLabels: ['Yes', 'No'],
              animation: 'slide',
              primaryButtonIndex: 1,
              cancelable: false,
              callback: function (index) {
                  if (index == 0) {
                      window.open('https://play.google.com/store/apps', '_system')
                  } else if (index == 1) {

                  }

              }
          });
      }
  );
}

function logMsg(message){
  $('#logText').append("<br>"+message);
}
