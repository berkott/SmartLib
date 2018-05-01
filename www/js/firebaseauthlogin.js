// Load all data
function loadData() {
  loadMap();
  loadLibData();
  getAllBooks();
}

function receiveNotificationMessage(data) {
  logMsg("RECEIVED NOTIFICATION " + data);
}

function registerMonacaPushHandler() {
  monaca.cloud().Push.setHandler(receiveNotificationMessage);
}

registerMonacaPushHandler();

// Define AuthUI element
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      return false;
    }
  },
  signInOptions: [{
    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: false
  }],
};
// Start AuthUI Element
ui.start('#firebaseui-auth-container', uiConfig);
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    logMsg("works");
    document.getElementById('appNavigator').pushPage('pageWithSlider.html', {
      data: {
        title: 'MyLib'
      }
    }).then(function() {
      setTimeout(loadData, 1000);
      logMsg("Loading data");
    }).catch(function() {
      logMsg("Error: problem pushing page");
    });
  }
});
