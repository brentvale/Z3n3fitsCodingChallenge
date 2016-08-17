var React = require('react');
var ReactDOM = require('react-dom');

var ArtistStore = require('./stores/artist.js');
var ClientActions = require('./actions/clientActions.js');

var SearchField = require('./components/search_field.jsx').SearchField;
var ArtistInfo = require('./components/artist_info.jsx').ArtistInfo;

var ArtistPage = React.createClass({
  getInitialState: function(){
    //default to Beyone because she is amazing
    return { artistName: "Beyonce", artistInfo: null };
  },
  componentDidMount: function(){
    this.newArtistListener = ArtistStore.addListener(this.updateArtist);
    //need to update for when user searches for new artist
    if(this.state.artistInfo == null){
      ClientActions.fetchArtistByName(this.state.artistName);
    }
  },
  componentWillUnmount: function(){
    this.newArtistListener.remove();
  },
  updateArtist: function(){
    var currentArtist = ArtistStore.currentArtist();
    
    this.setState({artistInfo: currentArtist})
  },
  render: function(){
    if(this.state.artistInfo == null){
      return <SearchField />;
    }
    return(
      <div>
        <SearchField />
        <ArtistInfo artist={this.state.artistInfo}/>
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <ArtistPage />,
    document.getElementById('reactApp')
  );
});