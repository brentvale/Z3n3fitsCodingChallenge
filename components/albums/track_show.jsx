var React = require('react');

var TrackShow = React.createClass({
  timeToDisplayFormat: function(time){
    var timeInSeconds = time/1000;
    
    var minutes = parseInt(timeInSeconds / 60);
    var seconds = parseInt(timeInSeconds % 60);
    
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  },
  render: function(){
    var trackTime = this.timeToDisplayFormat(this.props.track.duration_ms);
    return(
      <div className="track-show">
        <p><span>{this.props.track.name}</span> <span>{trackTime}</span></p>
      </div>
    )
  }
});

module.exports={
  TrackShow: TrackShow
}