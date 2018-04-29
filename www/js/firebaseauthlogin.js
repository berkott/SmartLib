// document.addEventListener('init', function (event) {
function loadData(){
    loadMap();
    loadLibData();
    getAllBooks();
}

  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  var uiConfig = {
    callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
            return false;
        }
    },
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  ui.start('#firebaseui-auth-container', uiConfig);
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("works");
        document.getElementById('appNavigator').pushPage('pageWithSlider.html', {
          data: {
            title: 'MyLib'
          }
        }).then(function(){
          loadData();
          logMsg("Loading data");
        });
      }
  });
// });

// function getUiConfig() {
//   return {
//     'callbacks': {
//       // Called when the user has been successfully signed in.
//       'signInSuccessWithAuthResult': function(authResult, redirectUrl) {
//         if (authResult.user) {
//           handleSignedInUser(authResult.user);
//         }
//         if (authResult.additionalUserInfo) {
//           document.getElementById('is-new-user').textContent =
//               authResult.additionalUserInfo.isNewUser ?
//               'New User' : 'Existing User';
//         }
//         // Do not redirect.
//         return true;
//       }
//     },
//     // Opens IDP Providers sign-in flow in a popup.
//     'signInFlow': 'popup',
//     'signInSuccessUrl': 'tabbar.html',
//     'signInOptions': [

//       {
//         provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         // Whether the display name should be displayed in Sign Up page.
//         requireDisplayName: false
//       }
//     ],
//     // Terms of service url.
//     'tosUrl': 'https://www.google.com',
//     'credentialHelper': CLIENT_ID && CLIENT_ID != 'YOUR_OAUTH_CLIENT_ID' ?
//         firebaseui.auth.CredentialHelper.GOOGLE_YOLO :
//         firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
//   };
// }

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) document.getElementById('appNavigator').pushPage('tabbar.html');
// });
// // Disable auto-sign in.
// ui.disableAutoSignIn();


// /**
//  * @return {string} The URL of the FirebaseUI standalone widget.
//  */
// // function getWidgetUrl() {
// //   return '/widget#recaptcha=' + getRecaptchaMode();
// // }


// /**
//  * Redirects to the FirebaseUI widget.
//  */
// // var signInWithRedirect = function() {
// //   window.location.assign(getWidgetUrl());
// // };


// /**
//  * Displays the UI for a signed in user.
//  * @param {!firebase.User} user
//  */
// var handleSignedInUser = function(user) {
//   document.getElementById('user-signed-in').style.display = 'block';
//   document.getElementById('user-signed-out').style.display = 'none';
//   document.getElementById('name').textContent = user.displayName;
//   document.getElementById('email').textContent = user.email;
//   ons.notification.toast('Logged In!', {
//             timeout: 2000
//   });

//   if (user.photoURL){
//     var photoURL = user.photoURL;
//     // Append size to the photo URL for Google hosted images to avoid requesting
//     // the image with its original resolution (using more bandwidth than needed)
//     // when it is going to be presented in smaller size.
//     if ((photoURL.indexOf('googleusercontent.com') != -1) ||
//         (photoURL.indexOf('ggpht.com') != -1)) {
//       photoURL = photoURL + '?sz=' +
//           document.getElementById('photo').clientHeight;
//     }
//     document.getElementById('photo').src = photoURL;
//     document.getElementById('photo').style.display = 'block';
//   } else {
//     document.getElementById('photo').style.display = 'none';
//   }
// };


// /**
//  * Displays the UI for a signed out user.
//  */
// var handleSignedOutUser = function() {
//   document.getElementById('user-signed-in').style.display = 'none';
//   document.getElementById('user-signed-out').style.display = 'block';
//   ui.start('#firebaseui-container', getUiConfig());
// };

// // Listen to change in auth state so it displays the correct UI for when
// // the user is signed in or not.
// firebase.auth().onAuthStateChanged(function(user) {
//   document.getElementById('loading').style.display = 'none';
//   document.getElementById('loaded').style.display = 'block';

//   user ? handleSignedInUser(user) : handleSignedOutUser();
// });

// /**
//  * Deletes the user's account.
//  */
// // var deleteAccount = function() {
// //   firebase.auth().currentUser.delete().catch(function(error) {
// //     if (error.code == 'auth/requires-recent-login') {
// //       // The user's credential is too old. She needs to sign in again.
// //       firebase.auth().signOut().then(function() {
// //         // The timeout allows the message to be displayed after the UI has
// //         // changed to the signed out state.
// //         setTimeout(function() {
// //           alert('Please sign in again to delete your account.');
// //         }, 1);
// //       });
// //     }
// //   });
// // };


// /**
//  * Handles when the user changes the reCAPTCHA config.
//  */
// // function handleRecaptchaConfigChange() {
// //   // var newRecaptchaValue = document.querySelector(
// //   //     'input[name="recaptcha"]:checked').value;
// //   // location.replace(location.pathname + '#recaptcha=' + newRecaptchaValue);

// //   // Reset the inline widget so the config changes are reflected.
// //   ui.reset();
// //   ui.start('#firebaseui-container', getUiConfig());
// // }


// /**
//  * Initializes the app.
//  */
// var initApp = function() {
//   // document.getElementById('sign-in-with-redirect').addEventListener(
//   //     'click', signInWithRedirect);
//   // signInWithRedirect();
//   document.getElementById('sign-out').addEventListener('click', function() {
//     firebase.auth().signOut();
//   });
// };

// window.addEventListener('load', initApp);
