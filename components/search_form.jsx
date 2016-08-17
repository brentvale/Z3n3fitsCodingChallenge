var React = require('react');

var SearchForm = React.createClass({
  render: function(){
    return(
      <form onSubmit={this.props.submitSearchForm}>
        <label>
          <input  id="artistName"
                  type="text"
                  onChange={this.props.handleFormChange}
                  placeholder="Search For Artist"/>
        </label>
        <input type="Submit" value="Search" />
      </form>
    )
  }
});

module.exports = {
  SearchForm: SearchForm
}