var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse.js');
require('../../main.css');
require('../main.js');

var ToDoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<TodoListItem>{itemText}</TodoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});

ReactDOM.render(<ToDoList />, document.getElementById('listDiv'));

exports = ToDoList;