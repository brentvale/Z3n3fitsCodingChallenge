var Dispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');


module.exports = {
  receiveArtist: function(artist){
    Dispatcher.dispatch({
      actionType: ArtistConstants.RECEIVE_SINGLE_ARTIST,
      artist: artist
    });
  },
  receiveArtistAlbums: function(respObj){
    Dispatcher.dispatch({
      actionType: ArtistConstants.RECEIVE_ARTIST_ALBUMS,
      albums: respObj.albums,
      artistId: respObj.artistId
    });
  }
}
