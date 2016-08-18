var React = require('react');

var AlbumShow = React.createClass({
  render: function(){
    var altTextImage = this.props.album.name + " Album Cover";
    //this.props.album.images[0]; //300x300
    //this.props.album.images[1]; //300x300
    //this.props.album.images[2]; //300x300
    var targetImage = this.props.album.images[1]; //300x300
    
    return(
      <div className="center-block">
        
        <img  className="album-cover center-block"
              src={targetImage.url} 
              alt={altTextImage} 
              height={targetImage.height} 
              width={targetImage.width} />
        <p className="album-title">{this.props.album.name}</p>
      </div>
    )
  }
});

module.exports = {
  AlbumShow: AlbumShow
}