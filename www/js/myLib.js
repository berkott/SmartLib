window.onload = function() {
  getCheckedOut();
  getReserved();
  getEvents();
  getTrending();
  getLibraryPicks();
}

function getCheckedOut() {

}

function getReserved() {

}

function getEvents() {
  firebase.database().ref('events').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var name = childSnapshot.val().name;
      var date = childSnapshot.val().date;
      var time = childSnapshot.val().time;
      var reminders = childSnapshot.val().reminders;
      $('#eventsContent').append("<div><div style='font-size: 17px;'>"+name+"</div><div>Reminders: "+reminders+"</div><div>Date: "+date+"</div><div>Time: "+time+"</div><hr align='center' width='80%'></div>");
    });
  });
}

function getTrending() {
  var i = 0;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var author = childSnapshot.val().author;
      var trendingStatus = childSnapshot.val().trending || "no";
      if (trendingStatus === "yes") {
        $('#trendingContent').append("<div id='trendingContent" + i + "'><img id='trendingBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Title: " + title + "</div><div>Author: " + author + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div><hr align='center' width='80%'></div>");
        addImage("trending", i);
      }
      i++;
    });
  });
}

function getLibraryPicks() {
  var i = 0;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var author = childSnapshot.val().author;
      var libStatus = childSnapshot.val().libPick || "no";
      if (libStatus === "yes") {
        $('#libraryPicks').append("<div id='Library Picks" + i + "'><img id='libPickBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Title: " + title + "</div><div>Author: " + author + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div><hr align='center' width='80%'></div>");
        addImage("libPick", i);
      }
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
