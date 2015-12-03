var React = require('react');
var ToDoListItem = require('./toDoList.jsx');
var ToDoCollection = require('../collections/toDoCollections.js');

var ToDoListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.children}</li>
		);
	}
});

ReactDOM.render(<ToDoListItem />, document.getElementById('listItemDiv'));

module.exports = ToDoListItem;
