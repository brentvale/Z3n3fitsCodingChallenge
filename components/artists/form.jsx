var React = require('react');

var ArtistForm = React.createClass({
  getInitialState: function(){
    return { artistSearch: "" }
  },
  handleSubmitForm: function(){
    this.props.handleSubmitForm(this.state.artistSearch);
  },
  handleUpdateForm: function(event){
    this.setState({artistSearch: event.target.value});
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmitForm}>
        <input  type="text" 
                onChange={this.handleUpdateForm}
                placeholder="Search For Artist"/>
                
        <input type="submit" value="Search" readOnly />
      </form>
    )
  }
});

module.exports = {
  ArtistForm: ArtistForm
}