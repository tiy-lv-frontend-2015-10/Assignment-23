var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');
var AddNew = require('./AddNew.jsx');
var Todo = require('./Todo.jsx');
var TodoListItem = require('./TodoListItem.jsx');
var BottomEdge = require('./bottomEdge.jsx');
var TodoList = require('../collections/todoList');
var itemList = new TodoList();

module.exports = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},
	componentWillMount: function () {
    itemList.fetch({
				success: function(resp){
				var blah = resp.toJSON();
				this.setState({list: blah});
				}.bind(this),
				error: function(err) {
					console.log(err);
				}
			})
  },
	_upList: function(newTodo) {
		itemList.add(newTodo);
		this.setState({list: itemList.toJSON()})
	},

	render: function() {
			return (
				<div>
					<h1>todos</h1>
						<div id="notepad">
							<Paper zDepth={4} id="top-mast">
							  <AddNew upList={this._upList}/>
							</Paper>
						 <Todo list={this.state.list} />
						</div>
				</div>
			)
	}
});
