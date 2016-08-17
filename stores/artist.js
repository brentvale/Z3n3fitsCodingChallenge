var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');
var ArtistStore = new Store(AppDispatcher);

//save reference to old artists to be able to avoid api calls
var _artists = {};
var _currentArtist = {}

var addNewArtist = function(artist){
  _artists[artist.name] = artist;
  _currentArtist = artist;
};

ArtistStore.artistByName = function(artistName){
  //probably will have to downcase to avoid conflicts
  if(_artists[artistName]){
    return _artists[artistName];
  } else {
    return "Unable to Find that Artist: Searching Spotify API"
  }
};
ArtistStore.currentArtist = function(){
  return _currentArtist;
}

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.RECEIVE_SINGLE_ARTIST:
      addNewArtist(payload.artist);
      ArtistStore.__emitChange();
      break;
  }
};

module.exports = ArtistStore;