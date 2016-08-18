var React = require('react');

var AlbumShow = React.createClass({
  render: function(){
    return(
      <div className="center-block">{this.props.album.name}</div>
    )
  }
});

module.exports = {
  AlbumShow: AlbumShow
}