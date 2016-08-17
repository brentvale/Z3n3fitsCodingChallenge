var Dispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');


module.exports = {
  receiveArtist: function(artist){
    Dispatcher.dispatch({
      actionType: ArtistConstants.RECEIVE_SINGLE_ARTIST,
      artist: artist
    });
  }
}
