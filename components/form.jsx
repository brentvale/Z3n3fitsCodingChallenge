var React = require('react');

var SearchForm = React.createClass({
  getInitialState: function(){
    return { searchFormVal: ""}
  },
  handleChange: function(event){
    this.setState({searchFormVal: event.target.value});
  },
  handleSubmit: function(){
    this.props.submitSearchForm(this.state.searchFormVal);
  },
  render: function(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          <input  type="text"
                  onChange={this.handleChange}
                  placeholder="Search For Artist"/>
        </label>
        <input type="Submit" value="Search" readOnly/>
      </form>
    )
  }
});

module.exports = {
  SearchForm: SearchForm
}