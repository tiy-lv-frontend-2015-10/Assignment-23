var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');
var AddNew = require('./AddNew.jsx');
var Todo = require('./Todo.jsx');
var BottomEdge = require('./bottomEdge.jsx');
var TodoList = require('../collections/todoList');

module.exports = React.createClass({
	render: function() {
			return (
				<div>
					<h1>todos</h1>
						<div id="notepad">
							<Paper zDepth={5}>
							  <AddNew />
								<Todo />
							</Paper>
							<BottomEdge />
						</div>
				</div>
			)
	}
});
