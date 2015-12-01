var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse');

require('../../main.css');
require('../main.js');

var ToDoListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.children}</li>
		);
	}
});

ReactDOM.render(<ToDoListItem />, document.getElementById('listItemDiv'));

module.exports = ToDoListItem;