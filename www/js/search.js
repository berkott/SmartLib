function searchBtn(queryText) {
    fn.pushPage({
        'id': 'search.html',
        'title': 'Search'
    });
    searchBooks(queryText);
}

var databaseReference = firebase.database();

function searchBooks(queryText) {
    return new Promise((resolve,reject)=>{
        database.ref('list').once('value', function(snapshot) {
            var allbooks = snapshot.val();
            resolve(allbooks);
            // console.log(allbooks);
            var titles = [];
            var v = 0;
            while (v < (allbooks.length - 1)) {
                titles.push(allbooks[v].longTitle);
                v = v + 1;
            }
            ;console.log(allbooks);
            console.log(titles);

            var options = {
                shouldSort: true,
                findAllMatches: true,
                threshold: 0.6,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                keys: ["longTitle", "author"]
            };
            var fuse = new Fuse(allbooks,options);
            // "list" is the item array
            var result = fuse.search(queryText);
            console.log(result);

            var f = 0;

            while (f < (result.length)) {
                if (result[f] != null) {
                    i = result[f].id;
                    writeCard(i);
                };
                f = f + 1;
            };

            function writeCard(i) {
                firebase.database().ref('list/' + i + '').once('value', function(snapshot) {
                    var title = snapshot.val().title;
                    var author = snapshot.val().author || "None";
                    var category = snapshot.val().category || "None";
                    var pages = snapshot.val().pages || "None";
                    $('#searchResults').append("<ons-card><div class='title'>" + title + "</div><div class='content'><img id='specificBookPic" + i + "' style='width:20%; height:35%; text-align: left;'><div style='width:70%; float:right;'><div style='margin-bottom:6%'>Author: " + author + "</div><div style='margin-bottom:6%'>Category: " + category + "</div><ons-button modifier='quiet' class='button-margin' onclick='bookButton(" + i + ")'>View</ons-button></div></div></ons-card>");
                    addImage("specific", i);
                });
            };

            ons.notification.toast('Searched for ' + queryText, {
                timeout: 2000
            });

        });
    });

};
