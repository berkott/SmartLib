// Initialize Map Element
function loadMap() {
  // Get Appropriate Map from Backend (Firebase)
  var storageRef = storage.ref();
  storageRef.child('map.jpg').getDownloadURL().then(function(url) {
    var img = document.getElementById('mapPic');
    img.src = url;
  });
}
