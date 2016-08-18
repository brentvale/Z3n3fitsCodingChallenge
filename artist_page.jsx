var React = require('react');
var ReactDOM = require('react-dom');

var ArtistStore = require('./stores/artist.js');
var ClientActions = require('./actions/clientActions.js');

var ArtistForm = require('./components/artists/form.jsx').ArtistForm;
var ArtistShow = require('./components/artists/show.jsx').ArtistShow;

var ArtistPage = React.createClass({
  render: function(){
    return(
      <div>
        <ArtistForm />
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