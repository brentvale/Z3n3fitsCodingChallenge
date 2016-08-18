var React = require('react');
var AlbumShow = require('./show.jsx').AlbumShow;

var AlbumsIndex = React.createClass({
  render: function(){
    return(
      <ul>
      {this.props.albums.map(function(album, idx){
        return <li className="col-xs-12 col-sm-4 col-md-3" key={idx}><AlbumShow album={album} /></li>;
      })}
      </ul>
    )
  }
});

module.exports = {
  AlbumsIndex: AlbumsIndex
}