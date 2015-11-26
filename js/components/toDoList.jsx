var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

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

module.exports = ToDoList;