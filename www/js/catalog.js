window.onload = function() {
  getAllBooks
}

function getAllBooks() {
  var i = 0;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var author = childSnapshot.val().author || "none";
      var category = childSnapshot.val().category || "none";
      $('#allBooks').append("<ons-card id='allBooks" + i + "'><div class='title'>"+title+"</div><div class='content'><img id='trendingBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Author: " + author + "</div><div>Category: " + categor + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div></div><hr align='center' width='80%'></ons-card>");
      addImage("trending", i);
      i++;
    });
  });
}

function bookButton(i) {
  console.log("book button pressed");
}

function addImage(type, i) {
  var storageRef = storage.ref();
  storageRef.child('/BookCovers/' + i + '.jpg').getDownloadURL().then(function(url) {
    var img = document.getElementById(type + 'BookPic' + i);
    img.src = url;
  });
}
