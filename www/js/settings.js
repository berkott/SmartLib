var showPrompt = function() {
  var time = Date.now();
  var ref = storageRef.child('BugReports/reports' + time + '.txt');
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
