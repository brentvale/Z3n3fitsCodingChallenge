var ApiUtil = require('../util/apiUtil.js');

module.exports = {
  fetchArtistByName: function(artistName){
    ApiUtil.fetchArtistByName(artistName);
  },
  fetchArtistAlbumsById: function(artistId){
    ApiUtil.fetchArtistAlbumsById(artistId);
  }
}
