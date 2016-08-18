var React = require('react');

var ArtistShow = React.createClass({
  getInitialState: function(){
    
  },
  componentDidMount: function(){
    this.artistListener = ArtistStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.artistListener.remove();
  },
  _onChange: function(){
    
  },
  render: function(){
    return(
      <div>
        <h1>ArtistShow</h1>
      </div>
    )
  }
});

module.exports = {
  ArtistShow: ArtistShow
}