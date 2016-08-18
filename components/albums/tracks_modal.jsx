var React = require('react');
var TrackShow = require('./track_show.jsx').TrackShow;

var AlbumTracksModal = React.createClass({
  handleCloseModal: function(){
    this.props.toggleDisplay();
  },
  render: function(){
    return(
      <div className="modal-underlay">
        <div className="tracks-modal center-block">
          <span className="glyphicon glyphicon-remove" onClick={this.handleCloseModal}></span>
          <div className="tracks-list-container">
            <ul className="tracks-list">
              {this.props.tracks.map(function(track, idx){
                return <li key={idx}><TrackShow track={track} /></li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = {
  AlbumTracksModal: AlbumTracksModal
}