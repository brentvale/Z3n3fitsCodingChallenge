var React = require('react');
var ReactDOM = require('react-dom');

var ArtistStore = require('./stores/artist.js');
var ClientActions = require('./actions/clientActions.js');

var SearchForm = require('./components/search_form.jsx').SearchForm;
var ArtistInfo = require('./components/artist_info.jsx').ArtistInfo;

var ArtistPage = React.createClass({
  getInitialState: function(){
    return { artist: null, searchFieldVal: "" };
  },
  componentDidMount: function(){
    this.newArtistListener = ArtistStore.addListener(this.updateArtist);
  },
  componentWillUnmount: function(){
    this.newArtistListener.remove();
  },
  handleSearchFormChange: function(event){
    this.setState({searchFieldVal: event.target.value});
  },
  submitSearchForm: function(event){
    // band names that use characters that are not numbers or letters:  
    // https://www.theguardian.com/music/musicblog/2010/aug/11/bands-names-symbols
    // for assignment: using regex to make sure there are only spaces characters and digits
    var formData = this.state.searchFieldVal;
    var readyToSubmit = false;
    
    if(!formData.match(/[^a-z\d\s]/i)){
      formData = this.scrubData(formData);
      ClientActions.fetchArtistByName(formData);
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
  updateArtist: function(){
    var currentArtist = ArtistStore.currentArtist();
    debugger
    this.setState({artist: currentArtist});
  },
  render: function(){
    if(this.state.artist == null){
      return <SearchForm />;
    }
    return(
      <div>
        <SearchForm  submitSearchForm={this.submitSearchForm} 
                     handleFormChange={this.handleSearchFormChange}/>
        
        <ArtistInfo artist={this.state.artist}/>
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