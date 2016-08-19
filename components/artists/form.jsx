var React = require('react');
var ReactDOM = require('react-dom');

var ClientActions = require('../../actions/clientActions.js');
var ArtistStore = require('../../stores/artist.js');

var ArtistShow = require('./show.jsx').ArtistShow;

var ArtistForm = React.createClass({
  getInitialState: function(){
    return { artistName: "beyonce", artist: {}};
  },
  componentDidMount: function(){
    this.artistListener = ArtistStore.addListener(this._onChange);
    ClientActions.fetchArtistByName(ArtistStore.currentArtistName());
  },
  componentWillUnmount: function(){
    this.artistListener.remove();
  },
  _onChange: function(){
    var artist = ArtistStore.currentArtist();
    this.setState({artist: artist});
  },
  handleSubmitForm: function(event){
    // band names that use characters that are not numbers or letters:  
    // https://www.theguardian.com/music/musicblog/2010/aug/11/bands-names-symbols
    // for assignment: using regex to make sure there are only spaces characters and digits
    var searchString = $(event.target).find("#searchField").val();
    
    if(!searchString.match(/[^a-z\d\s]/i)){
      var requestName = this.scrubData(searchString);
      ClientActions.fetchArtistByName(requestName);
      // this.setState({artistName: requestName});
    } else {
      console.log("error message to user");
    }
  },
  scrubData: function(formData){
    //remove extra white spaces
    formData = formData.replace(/\s\s+/g, ' ');

    //remove space from front and end of form data
    formData = formData.trim();

    //prepare form data for API by replacing spaces with %20
    formData = formData.replace(/\s/g, '%20');
  
    return formData;
  },
  render: function(){
    var artistShow;
    if(Object.keys(this.state.artist).length === 0 && this.state.artist.constructor == Object){
      artistShow = <div></div>;
    } else {
      artistShow = <ArtistShow artist={this.state.artist}/>;
    }
    return(
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input  id="searchField"
                  type="text" 
                  placeholder="Search For Artist"/>
        
          <input className="submit-button" type="submit" value="SEARCH" readOnly />
        </form>
        {artistShow}
      </div>
    )
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <ArtistForm />,
    document.getElementById('reactApp')
  );
});