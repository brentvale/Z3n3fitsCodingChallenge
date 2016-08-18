var React = require('react');
var ReactDOM = require('react-dom');

var ArtistStore = require('./stores/artist.js');
var ClientActions = require('./actions/clientActions.js');

var ArtistForm = require('./components/artists/form.jsx').ArtistForm;
var ArtistShow = require('./components/artists/show.jsx').ArtistShow;

var ArtistPage = React.createClass({
  handleSubmitForm: function(formData){
    // band names that use characters that are not numbers or letters:  
    // https://www.theguardian.com/music/musicblog/2010/aug/11/bands-names-symbols
    // for assignment: using regex to make sure there are only spaces characters and digits
    if(!formData.match(/[^a-z\d\s]/i)){
      var requestName = this.scrubData(formData);
      ClientActions.fetchArtistByName(requestName);
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
    return(
      <div>
        <ArtistShow />
        
      </div>
    )
  }
});

$(function(){
  ReactDOM.render(
    <ArtistPage />,
    document.getElementById('reactApp')
  );
})
  
