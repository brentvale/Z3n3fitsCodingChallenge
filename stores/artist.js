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
  _albums[artistId] = albumsArray;
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