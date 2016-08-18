var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');
var ArtistStore = new Store(AppDispatcher);

var _artists = [];

var addNewArtist = function(artist){
  _artists.push(artist);
};

ArtistStore.currentArtist = function(){
  if(_artists.length == 0){
    return null;
  } else {
    return _artists[_artists.length-1];
  }
  // if(Object.keys(_currentArtist).length === 0 && _currentArtist.constructor == Object){
//     return null;
//   } else {
//     return _currentArtist;
//   }
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