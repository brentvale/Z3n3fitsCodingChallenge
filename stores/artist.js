var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');
var ArtistStore = new Store(AppDispatcher);

var _currentArtist = {};

var addNewArtist = function(artist){
  _currentArtist = artist;
};

ArtistStore.currentArtist = function(){
  if(Object.keys(_currentArtist).length === 0 && _currentArtist.constructor === Object){
    return null;
  } else {
    return _currentArtist;
  }
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.RECEIVE_SINGLE_ARTIST:
      addNewArtist(payload.artist);
      ArtistStore.__emitChange();
      break;
  }
};

module.exports = ArtistStore;