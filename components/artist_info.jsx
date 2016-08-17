var React = require('react');

var ArtistInfo = React.createClass({
  render: function(){
    debugger
    return(
      <div>
        {this.props.artist.name}
      </div>
    )
  }
});

module.exports = {
  ArtistInfo: ArtistInfo
}