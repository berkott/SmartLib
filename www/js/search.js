function searchBtn(queryText) {
  fn.pushPage({
    'id': 'search.html',
    'title': 'Search'
  });
  searchBooks(queryText);
}

var databaseReference = firebase.database();

function searchBooks(queryText) {
  return new Promise((resolve, reject) => {
      database.ref('list').once('value', function(snapshot) {
          var val = snapshot.val();
          var allbooks = _.values(val);
          resolve(allbooks);
      });
  });



  var i = databaseReference.ref('list').orderByChild('longTitle').startAt(queryText).endAt(queryText+"\uf8ff").once("value");


  firebase.database().ref('list/' + i + '').once('value', function(snapshot) {
    var title = snapshot.val().title;
    var author = snapshot.val().author || "None";
    var category = snapshot.val().category || "None";
    var pages = snapshot.val().pages || "None";
    $('#searchResults').append("<ons-card><div class='title'>" + title + "</div><div class='content'><img id='specificBookPic" + i +
      "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Author: " + author +
      "</div><div style='margin-bottom:6%'>Category: " + category +
      "</div><div>Pages: " + pages +
      "</div></div></div></ons-card><section style='margin: 16px'>" +
      "<ons-button modifier='large' class='button-margin' onclick='reserveBook(" + i + ")'>Reserve</ons-button>" +
      "<ons-button modifier='large' class='button-margin' style='margin-top: 5px;' onclick='checkoutBook(" + i + ")'>Checkout</ons-button>" +
      "</section>");
    addImage("specific", i);
  });
}
