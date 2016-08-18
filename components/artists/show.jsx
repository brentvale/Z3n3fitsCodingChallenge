var React = require('react');
var ArtistStore = require('../../stores/artist.js');
var ClientActions = require('../../actions/clientActions.js');
var AlbumsIndex = require('../albums/index.jsx').AlbumsIndex;

var ArtistShow = React.createClass({
  getInitialState: function(){
    return {albums: [], windowWidth: window.innerWidth };
  },
  componentDidMount: function(){
    this.artistListener = ArtistStore.addListener(this._onChange);
    window.addEventListener('resize', this.handleResize);
    
    ClientActions.fetchArtistAlbumsById(this.props.artist.id);
  },
  componentWillUnmount: function(){
    this.artistListener.remove();
    window.removeEventListener('resize', this.handleResize);
  },
  handleResize: function(e) {
    this.setState({windowWidth: window.innerWidth});
  },
  _onChange: function(){
    this.setState({albums: ArtistStore.albums(this.props.artist.id)});
  },
  render: function(){
    var altImageText = this.props.artist.name + " Image";
    var altLinkText = "Link to view " + this.props.artist.name + " in Spotify"
    var totalFollowersWithCommas = this.props.artist.followers.total.toString()
                                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var albumsList = (this.state.albums.length == 0) ? <div></div> : <AlbumsIndex albums={this.state.albums}/>
                                          
//  this.props.artist.images[0] 1000 x 1000
//  this.props.artist.images[1] 640  x 640
//  this.props.artist.images[2] 200  x 200
//  this.props.artist.images[3] 64   x 64
    var targetImage, height, width;
    
    if(this.state.windowWidth < 1100){
      targetImage = this.props.artist.images[2];
      height = targetImage.height;
      width = targetImage.width;
    } else {
      targetImage = this.props.artist.images[1];
      height = 400;
      width = 400;
    }
    
    return(
      <div>
        <div className="artist-info-container">
          <img  alt={altImageText} 
                src={targetImage.url} 
                height={height}
                width={width} />
          <div>
            <h1>{this.props.artist.name}</h1>
            <p className="info">
                <a  href={this.props.artist.external_urls.spotify} 
                                    alt={altLinkText}
                                    target="_blank">Listen On Spotify</a>
            </p>
            <p className="info">Followers On Spotify: {totalFollowersWithCommas}</p>
          </div>
        </div>
        
        {albumsList}
        
      </div>
    )
  }
});

module.exports = {
  ArtistShow: ArtistShow
}