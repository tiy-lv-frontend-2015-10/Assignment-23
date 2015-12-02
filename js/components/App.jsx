var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');
var AddNew = require('./AddNew.jsx');
var Todo = require('./Todo.jsx');
var TodoListItem = require('./TodoListItem.jsx');
var BottomEdge = require('./bottomEdge.jsx');
var TodoList = require('../collections/todoList');
var itemList = new TodoList();
var currentList = new TodoList();
var activeList = new TodoList();
var doneList = new TodoList();

module.exports = React.createClass({
	getInitialState: function() {
		return {
			list: []
		}
	},
	componentWillMount: function () {
    itemList.fetch({
				success: function(resp){
				this.setState({list: resp.toJSON()});
				}.bind(this),
				error: function(err) {
					console.log(err);
				}
			})
			currentList = this.state.list;
  },
	_upList: function(newTodo) {
		itemList.add(newTodo);
		this.setState({list: itemList.toJSON()})
	},
	// _downList: function(){
	// 	// doneList
	// },
	// _hotList: function(){
	// 	// activeList
	// },
	// _allList: function(){
	// 	//itemList?
	// },
	// _deList: function(collection){
	// 	console.log(collection);
	// },
	_handleRender: function(collection) {
	 this.setState({
		 list: collection
	 });
 },

	render: function() {
			return (
				<div>
					<h1>todos</h1>
						<div id="notepad">
							<Paper zDepth={4} id="top-mast">
							  <AddNew upList={this._upList}/>
							</Paper>
						 <Todo list={this.state.list} handleRender={this._handleRender}/>
						</div>
				</div>
			)
	}
});

// allList={this._allList} downlist={this._downList} hotList={this._hotList}
// delist={this._delist}
