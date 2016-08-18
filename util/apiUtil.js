var ServerActions = require('../actions/serverActions.js');

module.exports = {
  fetchArtistByName: function(artistName){
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
      success: function(resp){
        alert("success");
        var targetArtist = resp.artists.items[0];
        ServerActions.receiveArtist(targetArtist);
      },
      error: function(resp){
        console.log("errored out in the request");
      }
    });
  }
}
