var React = require('react');

var ArtistForm = React.createClass({
  handleSubmitForm: function(){
    this.props.handleSubmitForm($("#artistForm").val());
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmitForm}>
        <input  id="artistForm"
                type="text" 
                onChange={this.props.handleUpdateForm}
                placeholder="Search For Artist"/>
                
        <input type="submit" value="Search" readOnly />
      </form>
    )
  }
});

module.exports = {
  ArtistForm: ArtistForm
}