var React = require('react');
var ArtistStore = require('../../stores/artist.js');
var ClientActions = require('../../actions/clientActions.js');
var AlbumsIndex = require('../albums/index.jsx').AlbumsIndex;

var ArtistShow = React.createClass({
  getInitialState: function(){
    return {albums: []}
  },
  componentDidMount: function(){
    this.artistListener = ArtistStore.addListener(this._onChange);
    ClientActions.fetchArtistAlbumsById(this.props.artist.id);
  },
  componentWillUnmount: function(){
    this.artistListener.remove();
  },
  _onChange: function(){
    this.setState({albums: ArtistStore.albums(this.props.artist.id)});
  },
  render: function(){
    var altImageText = this.props.artist.name + " Image";
//  this.props.artist.images[0] 1000 x 1000
//  this.props.artist.images[1] 640  x 640
//  this.props.artist.images[2] 200  x 200
//  this.props.artist.images[3] 64   x 64
    var targetImage = this.props.artist.images[2];
    
    var albumsList = (this.state.albums.length == 0) ? <div></div> : <AlbumsIndex albums={this.state.albums}/>
    
    return(
      <div>
        <h1>{this.props.artist.name}</h1>
        <div>
          <img  alt={altImageText} 
                src={targetImage.url} 
                height={targetImage.height}
                width={targetImage.width} />
        </div>
        {albumsList}
      </div>
    )
  }
});

module.exports = {
  ArtistShow: ArtistShow
}