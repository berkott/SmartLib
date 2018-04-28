  var config = {
    apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
    authDomain: "libraryapp-backend.firebaseapp.com",
    databaseURL: "https://libraryapp-backend.firebaseio.com",
    projectId: "libraryapp-backend",
    storageBucket: "libraryapp-backend.appspot.com",
    messagingSenderId: "617592398054"
  };
  firebase.initializeApp(config);
  var database = firebase.database();


  let ui = new firebaseui.auth.AuthUI(firebase.auth());
  let uiConfig = {
    callbacks: {
        signInSuccess: function(currentUser, credential, redirectUrl) {
            return false;
        }
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  };
  ui.start('#firebaseui-auth-container', uiConfig);
  firebase.auth().onAuthStateChanged(function(user) {
      if (user) document.getElementById('appNavigator').pushPage('tabbar.html');
  });

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword')
  const btnLogin = document.getElementsByClassName('login-button')
  // const btnSignup = document.getElementById('btnSignup')
  const btnLogout = document.getElementsByClassName('forgot-password')
  const donthaveaccount = document.getElementById('donthaveaccount')
  const passtext = document.getElementById('passtext')
  const emailtext = document.getElementById('emailtext')
  const btnAddBook = document.getElementById('btnAddBook')

  btnLogin.addEventListener('click', e => {
    console.log('login button click detected');
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));

  });
  btnSignup.addEventListener('click', e => {
    console.log('signup button click detected');
    //TODO: Check for real email

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    if (validateEmail(email)) {
      const promise = auth.createUserWithEmailAndPassword(email, pass);
    } else {
      promise.catch(e => alert(e.message));
    }

  });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function validate(email) {
    if (validateEmail(email)) {
      $("#result").text(email + " is valid :)");
      $("#result").css("color", "green");
    } else {
      $("#result").text(email + " is not valid :(");
      $("#result").css("color", "red");
    }
    return false;
  }

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var email = firebaseUser.email;
      var emailVerified = firebaseUser.emailVerified;
      var uid = firebaseUser.uid;
      var providerData = firebaseUser.providerData;
      console.log(firebaseUser);

      btnLogin.classList.add('hide');
      btnSignup.classList.add('hide');
      txtEmail.classList.add('hide');
      txtPassword.classList.add('hide');
      donthaveaccount.classList.add('hide');
      emailtext.classList.add('hide');
      passtext.classList.add('hide');
      btnLogout.classList.remove('hide');

      makeUid(uid);

    } else {
      console.log('Not logged in');
      btnLogin.classList.remove('hide');
      btnLogout.classList.add('hide');
      btnSignup.classList.remove('hide');
      txtEmail.classList.remove('hide');
      txtPassword.classList.remove('hide');
      donthaveaccount.classList.remove('hide');
      emailtext.classList.remove('hide');
      passtext.classList.remove('hide');

    }
  });

  function makeUid(uid) {
    // return firebase.database().ref.once('/persons/', function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     console.log(childKey);
    //     console.log(childData);
    //     // ...
    //   });
    // });
    //TODO finish this part if you have time bc other stuff is more important rn
    return firebase.database().ref('/persons/0/checkedout/0').once('value').then(function(snapshot) {
      var yea = (snapshot.val() && snapshot.val().isbn) || 'Anonymous';
      var date = (snapshot.val() && snapshot.val().until) || 'Anonymous';
    	console.log(yea);
    });
  }
