var React = require('react');

var ArtistInfo = React.createClass({
  render: function(){
    var altImageText = this.props.artist.name + " Image";
    
//  this.props.artist.images[0] 1000 x 1000
//  this.props.artist.images[1] 640  x 640
//  this.props.artist.images[2] 200  x 200
//  this.props.artist.images[3] 64   x 64
    
    var targetImage = this.props.artist.images[2];
    
    return(
      <div>
        <h1>{this.props.artist.name}</h1>
        <div>
          <img  alt={altImageText} 
                src={targetImage.url} 
                height={targetImage.height}
                width={targetImage.width} />
        </div>
      </div>
    )
  }
});

module.exports = {
  ArtistInfo: ArtistInfo
}