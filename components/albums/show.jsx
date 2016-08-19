var React = require('react');
var ClientActions = require('../../actions/clientActions.js');
var ArtistStore = require('../../stores/artist.js');

var AlbumTracksModal = require('./tracks_modal.jsx').AlbumTracksModal;

var AlbumShow = React.createClass({
  getInitialState: function(){
    return { modalShowing: false, tracks: ArtistStore.tracksByAlbumId(this.props.album.id) };
  },
  componentDidMount: function(){
    this.trackListener = ArtistStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.tracksListener.remove();
  },
  toggleDisplayAlbumInfo: function(){
    if(this.state.tracks.length == 0){
      ClientActions.fetchTracksByAlbumId(this.props.album.id);
    }
    
    this.setState({modalShowing: !this.state.modalShowing});
  },
  _onChange: function(){
    this.setState({tracks: ArtistStore.tracksByAlbumId(this.props.album.id)});
  },
  render: function(){
    var altTextImage = this.props.album.name + " Album Cover";
    //this.props.album.images[0]; //300x300
    //this.props.album.images[1]; //300x300
    //this.props.album.images[2]; //300x300
    var targetImage = this.props.album.images[1]; //300x300
    var tracksModal = (this.state.modalShowing > 0) ?   
                      <AlbumTracksModal tracks={this.state.tracks}
                                        toggleDisplay={this.toggleDisplayAlbumInfo}
                                        albumName={this.props.album.name}/> :
                      <div className="display-none"></div>;
    return(
      <div className="center-block album-container">
      
        <img  className="album album-cover center-block"
              src={targetImage.url} 
              alt={altTextImage} 
              onClick={this.toggleDisplayAlbumInfo}/>
        <img  className="album vinyl-record center-block"
              src="./../../images/vinyl_record.png" />
        <p className="album-title center-block">{this.props.album.name}</p>
              
        {tracksModal}
        
      </div>
    )
  }
});

module.exports = {
  AlbumShow: AlbumShow
}