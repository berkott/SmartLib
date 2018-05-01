// Barcode scanning function
function scanBarcode() {
  cordova.plugins.barcodeScanner.scan(
    function(result) {
      ons
        .notification.confirm({
          message: 'Please confirm that the ISBN ' + result.text + ' is the same as on the back of your book.'
        })
        .then(function(yes) {
          if (yes) {
            confirmCheckout(result.text);
          }
        });
    },
    function(error) {
      alert("Scanning failed: " + error);
    }, {
      preferFrontCamera: true, // iOS and Android
      showFlipCameraButton: true, // iOS and Android
      showTorchButton: true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt: "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats: "EAN_13, EAN_8", // default: all but PDF_417 and RSS_EXPANDED
      orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations: true, // iOS
      disableSuccessBeep: false // iOS and Android
    }
  );
}

// Manual ISBN lookup
function enterISBN() {
  var isbn = document.getElementById('textISBN').value;
  if (isbn) {
    confirmCheckout(isbn);
  }
}

// Checkout Confirmation
function confirmCheckout(isbn) {
  var j = 0;
  var userId = firebase.auth().currentUser.uid;
  // var userId = "joe";
  var value = new Date();
  var date = value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear();
  var found = false;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var bookISBN = childSnapshot.val().isbn;
      var checkedoutBy = childSnapshot.val().checkout.checkedoutBy;
      var reservedBy = childSnapshot.val().reserve.reservedBy;
        if (bookISBN === isbn) {
          if (reservedBy === "none" || reservedBy === userId) {
            found = true;
            if (checkedoutBy === 'none') {
              var i = j;
              ons.notification.confirm('Do you wish to checkout the book with the ISBN of ' + isbn + '?')
                .then(function(input) {
                  if (input) {
                    firebase.database().ref('list/' + i + '/checkout').set({
                      checkedoutBy: userId,
                      date: date
                    }).then(function() {
                      if (reservedBy === userId) {
                        firebase.database().ref('list/' + i + '/reserve').set({
                          reservedBy: 'none',
                          date: 'none'
                        }).then(function() {
                          ons.notification.alert('You have checked out your book until 2 weeks from today');
                        });
                      } else {
                        ons.notification.alert('You have checked out your book until 2 weeks from today');
                      }
                    });
                  }
                });
            
            } else if (checkedoutBy === userId) {
              ons.notification.alert('You cannot check out this book because you have already checked it out.');
            } else {
              ons.notification.alert('You cannot check out this book because someone else has already checked it out.');
            }
          } else {
            ons.notification.alert('You cannot check out this book because someone else has reserved it.');
          }
        }
      j++;
    });
    if (found === false) {
      ons.notification.alert('No book with this isbn has been found');
    }
  });
}
