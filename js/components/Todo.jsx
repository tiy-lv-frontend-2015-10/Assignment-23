var React = require('react');
var Backbone = require('../backbone-parse');
var Paper = require('material-ui/lib/paper');
var List = require('material-ui/lib/lists/list');
var TodoListItem = require('./TodoListItem.jsx');
var ListFooter = require('./listFooter.jsx');
var BottomEdge = require('./bottomEdge.jsx');

module.exports = React.createClass({

	render: function() {
		return (
			<div id="todo-panel" >
				<Paper id='todo-backing' zDepth={4}>
				<ul>
					{this.props.list.map(function(item){
						return <TodoListItem data={item}/>
					})}
				</ul>
				</Paper>
				<ListFooter />
			</div>
		)
	},
})
