var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('../backbone-parse');
var Paper = require('material-ui/lib/paper');
var FlatButton = require('material-ui/lib/flat-button');
var RaisedButton = require('material-ui/lib/raised-button');
var TodoList = require('../collections/todoList');
var ListFooter = require('./listFooter.jsx');
var BottomEdge = require('./bottomEdge.jsx');

module.exports = React.createClass({

	render: function() {
		console.log(this.props.data);
		return (
			<div>
				<Paper id='todo-backing'>
				<ul>

				</ul>
				</Paper>
				<ListFooter />
			</div>
		)
	},
	// renderList: function() {
	//
	// 	if(!this.props.items){
	// 		return <h4>Add a todo to get started.</h4>
	// 	} else {
	// 		var children = [];
	//
	// 		for(var key in this.props.items) {
	// 			var item = this.props.items[key];
	// 			item.key = key;
	//
	// 			children.push(
	// 				<ListItem item={item} key={key}>
	// 				</ListItem>
	// 				)
	// 		}
	// 		return children;
	// 	}
	// }

})
