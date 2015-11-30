var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');
var AddNew = require('./AddNew.jsx');
var Todo = require('./Todo.jsx');
var BottomEdge = require('./bottomEdge.jsx');
var TodoList = require('../collections/todoList');
var itemList = new TodoList();
var list = [];

module.exports = React.createClass({
	getInitialState: function() {
		return {

		}
	},
	render: function() {
		itemList.fetch({
			success: function(resp){
			list = resp.toJSON();
			console.log(list);
			},
			error: function(err) {
				console.log(err);
			}
		})
			return (

				<div>
					<h1>todos</h1>
						<div id="notepad">
							<Paper zDepth={5}>
							  <AddNew />
								<Todo data={list}/>
							</Paper>
							<BottomEdge />
						</div>
				</div>
			)
	}
});
