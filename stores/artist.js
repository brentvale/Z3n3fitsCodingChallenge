var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var ArtistConstants = require('../constants/artistConstants.js');
var ArtistStore = new Store(AppDispatcher);

var _artists = {},
    _albums = {},
    _currentArtist = {};

var addNewArtist = function(artist){
  _artists[artist.id] = artist;
  _currentArtist = artist
};

var addAlbumsToArtist = function(albumsArray, artistId){
  if(typeof(_albums[artistId]) == "undefined"){
    _albums[artistId] = [];
  }
  //N^2 approach to not add apparent duplicates to the _albums[artistId] array
  for(var i = 0; i < albumsArray.length; i++){
    var duplicate = false;
    for(var j = 0; j < _albums[artistId].length; j++){
      if(_albums[artistId][j].name && _albums[artistId][j].name == albumsArray[i].name){
        duplicate = true;
      }
    }
    if(!duplicate){
      _albums[artistId].push(albumsArray[i]);
    }
  }
};

ArtistStore.currentArtist = function(){
  return _currentArtist;
};

ArtistStore.findArtist = function(id){
  return _artists[id];
};

ArtistStore.albums = function(artistId){
  return _albums[artistId];
};

ArtistStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case ArtistConstants.RECEIVE_SINGLE_ARTIST:
      addNewArtist(payload.artist);
      ArtistStore.__emitChange();
      break;
    case ArtistConstants.RECEIVE_ARTIST_ALBUMS:
      addAlbumsToArtist(payload.albums, payload.artistId);
      ArtistStore.__emitChange();
      break;
  }
};

module.exports = ArtistStore;