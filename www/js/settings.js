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

function logMsg(message){
  console.log(message);
  $('#logText').append("<br>"+message);
}
