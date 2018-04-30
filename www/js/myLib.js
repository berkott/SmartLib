function loadLibData(){
  logMsg("loadLibData");
  getCheckedOut();
  getReserved();
  getEvents();
  getTrending();
  getLibraryPicks();
}

function getCheckedOut() {
  var i = 0;
  var userId = firebase.auth().currentUser.uid;
  console.log(userId + " at myLib");
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var checkedoutBy = childSnapshot.val().checkout.checkedoutBy;
      var date = childSnapshot.val().checkout.date;
      date = Date.parse(date);
      var dateDue = date + 15*86400000;
      var currentTime = Date.now();
      var timeLeft = dateDue - currentTime;
      var daysLeft = Math.round(timeLeft/86400000);
      logMsg("found checkout");
      if (checkedoutBy === userId) {
        logMsg("matching id");
        $('#checkedOutContent').append("<div id='checkedOutContent" + i + "'><img id='checkoutBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Title: " + title + "</div><div>Days Left: " + daysLeft + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div><hr align='center' width='80%'></div>");
        addImage("checkout", i);
      }
      i++;
    });
  });
}

function getReserved() {
  var i = 0;
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('list').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var title = childSnapshot.val().title;
      var reservedBy = childSnapshot.val().reserve.reservedBy;
      var date = childSnapshot.val().reserve.date;
      date = Date.parse(date);
      var dateDue = date + 15*86400000;
      var currentTime = Date.now();
      var timeLeft = dateDue - currentTime;
      var daysLeft = Math.round(timeLeft/86400000);
      if (reservedBy === userId) {
        $('#reservedContent').append("<div id='reservedContent" + i + "'><img id='reservedBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Title: " + title + "</div><div>Days Left: " + daysLeft + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div><hr align='center' width='80%'></div>");
        addImage("reserved", i);
      }
      i++;
    });
  });
}

function getEvents() {
  logMsg("getEvents");
  firebase.database().ref('events').once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      logMsg("adding event");
      var name = childSnapshot.val().name;
      var date = childSnapshot.val().date;
      var time = childSnapshot.val().time;
      var reminders = childSnapshot.val().reminders;
      if($('#eventsContent').length){
        logMsg("eventcontent available");
      }else{
        logMsg("ERR: eventcontent NOT available");
      }
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
      var author = childSnapshot.val().author || "None";
      var libStatus = childSnapshot.val().libPick || "no";
      if (libStatus === "yes") {
        $('#libraryPicks').append("<div id='Library Picks" + i + "'><img id='libPickBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Title: " + title + "</div><div>Author: " + author + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div><hr align='center' width='80%'></div>");
        addImage("libPick", i);
      }
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
