var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var ToDoListItem = React.createClass({
	render: function() {
		return (
			<li>{this.props.children}</li>
		);
	}
});

ReactDOM.render(<ToDoListItem />, document.getElementById('listItemDiv'));

module.exports = ToDoListItem;