getAllBooks();

function getAllBooks() {
  var i = 0;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var author = childSnapshot.val().author || "None";
      var category = childSnapshot.val().category || "None";
      $('#allBooks').append("<ons-card id='allBooks" + i + "'><div class='title'>"+title+"</div><div class='content'><img id='allBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Author: " + author + "</div><div>Category: " + category + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div></div></ons-card>");
      addImage("all", i);
      i++;
    });
  });
}

function addImage(type, i) {
  var storageRef = storage.ref();
  storageRef.child('/BookCovers/' + i + '.jpg').getDownloadURL().then(function(url) {
    var img = document.getElementById(type + 'BookPic' + i);
    console.log(url);
    img.src = url;
  },
  function(error){
    var img = document.getElementById(type + 'BookPic' + i);
    img.src = "images/noImage.png";
  });
}
