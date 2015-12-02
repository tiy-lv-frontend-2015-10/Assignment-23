var React = require('react');
var ToDoListItem = require('./toDoListItem.jsx');
var toDoCollections = require('../collections/toDoCollections.js');

var ToDoList = React.createClass({
	render: function() {
		var createItem = function(itemText) {
			return (
				<ToDoListItem>{itemText}</ToDoListItem>
			);
		};
		return <ul>{this.props.items.map(createItem)}</ul>;
	}
});


ReactDOM.render(<ToDoList />, document.getElementById('listDiv'));

module.exports = ToDoList;