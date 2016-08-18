var React = require('react');
var ArtistStore = require("../../stores/artist.js");

var ArtistShow = React.createClass({
  getInitialState: function(){
    return { artist: ArtistStore.currentArtist()};
  },
  componentDidMount: function(){
    this.artistListener = ArtistStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.artistListener.remove();
  },
  _onChange: function(){
    this.setState({artist: ArtistStore.currentArtist()});
  },
  render: function(){
    if(this.state.artist == null){
      return(
        <div>
          <h1>ArtistShow</h1>
        </div>
      )
    }
    return(
      <div>
        <h1>{this.props.artist.name}</h1>
      </div>
    )
  }
});

module.exports = {
  ArtistShow: ArtistShow
}