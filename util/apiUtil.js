var ServerActions = require('../actions/serverActions.js');

module.exports = {
  fetchArtistByName: function(artistName){
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/search?q=" + artistName + "&type=artist",
      success: function(resp){
        var targetArtist = resp.artists.items[0];
        ServerActions.receiveArtist(targetArtist);
      },
      error: function(resp){
        console.log("errored out in the request");
      }
    });
  },
  fetchArtistAlbumsById: function(artistId){
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/artists/" + artistId + "/albums?limit=50",
      success: function(resp){
        ServerActions.receiveArtistAlbums({albums: resp.items, artistId: artistId});
      },
      error: function(resp){
        console.log("errored out in the request");
      }
    });
  },
  fetchTracksByAlbumId: function(albumId){
    //assumption that an album will not have more than 50 tracks
    $.ajax({
      type: "GET",
      url: "https://api.spotify.com/v1/albums/" + albumId + "/tracks?limit=50",
      success: function(resp){
        ServerActions.receiveTracksForAlbum({tracks: resp.items, albumId: albumId});
      },
      error: function(resp){
        console.log("errored out in the request");
      }
    })
  }
}
