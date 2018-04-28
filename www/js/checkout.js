function scanBarcode(){
cordova.plugins.barcodeScanner.scan(
  function (result) {
    ons
    .notification.confirm({message: 'Please confirm that the ISBN '+result.text+' is the same as on the back of your book.'})
    .then(function(yes) {
      if(yes){
        confirmAlert(result.text);
      }
    });

  },
  function (error) {
      alert("Scanning failed: " + error);
  },
  {
      preferFrontCamera : true, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: true, // Android, launch with the torch switched on (if available)
      saveHistory: true, // Android, save scan history (default false)
      prompt : "Place a barcode inside the scan area", // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : "EAN_13, EAN_8", // default: all but PDF_417 and RSS_EXPANDED
      orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
      disableAnimations : true, // iOS
      disableSuccessBeep: false // iOS and Android
  }
);
}

function enterISBN() {
  var isbn = document.getElementById('textISBN').value;
  if (isbn){
  confirmAlert(isbn);
  }
  // confirmAlert(input)
  // ons.notification.prompt('Please enter the ISBN of the book you would like to checkout')
  //   .then(function(input) {
  //     confirmAlert(input);
  //   });
}

function confirmAlert(isbn){
  ons.notification.confirm('Do you wish to checkout the book with the ISBN of '+isbn+'?')
    .then(function(input) {
      if (input){
      confirmCheckout(isbn);
      }
    });
}

function confirmCheckout(isbn){
  //TODO confirm the checkout here

  ons.notification.toast('Test', {
    timeout: 2000
  });
  // successful();
  // unsuccessful();
}

function successful() {
  ons.notification.toast('Checkout successful!', {
    timeout: 2000
  });
}

function unsuccessful() {
  ons.notification.toast('Checkout unsuccessful.', {
    timeout: 2000
  });
}
