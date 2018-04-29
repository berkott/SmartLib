// ons.bootstrap()

// .controller('DialogController', function($scope) {
//   $scope.dialogs = {};

//   $scope.show = function(dlg) {
//     if (!$scope.dialogs[dlg]) {
//       ons.createDialog(dlg).then(function(dialog) {
//         $scope.dialogs[dlg] = dialog;
//         dialog.show();
//       });
//     } else {
//       $scope.dialogs[dlg].show();
//     }
//   }
// });
// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     {
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
//       requireDisplayName: false
//     }
//   ]
// });
//

// var ui = new firebaseui.auth.AuthUI(firebase.auth());
//
// var uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       document.getElementById('appNavigator').pushPage('tabbar.html');
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       document.getElementById('loader').style.display = 'none';
//     }
//   },
//   // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
//   signInFlow: 'popup',
//   signInSuccessUrl: 'tabbar.html',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//   ],
// };

// ui.start('#firebaseui-auth-container', uiConfig);
// ui.start('#firebaseui-auth-container', uiConfig);
// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) document.getElementById('appNavigator').pushPage('tabbar.html');
// });
