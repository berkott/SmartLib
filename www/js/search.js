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
          var allbooks = snapshot.val();
          resolve(allbooks);
          // console.log(allbooks);
          var titles = [];
          var v = 0;
          while (v < allbooks.length) {
            titles.push(allbooks[v].title)
            v = v++;
          };
          console.log(queryText);
          console.log(titles);

          var fuzzy = function(items, key) {
            // Returns a method that you can use to create your own reusable fuzzy search.

            return function(query) {
              var words  = query.toLowerCase().split(' ');

              return items.filter(function(item) {
                var normalizedTerm = item[key].toLowerCase();

                return words.every(function(word) {
                  return (normalizedTerm.indexOf(word) > -1);
                });
              });
            };
          };

          var searchByTitle = fuzzy(allbooks, 'longTitle');

          searchByTitle(queryText) // returns the 1st and 2nd items

          if (titles.some(titles => (queryText).includes(titles))) {
            ons.notification.toast(queryText + 'found!', {
                          timeout: 2000
            });

          } else {
            ons.notification.toast(queryText + ' not found.', {
                          timeout: 2000
            });
          };

      });
  });

  var i = queryText;


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
