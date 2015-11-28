var React = require('react');
var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');


module.exports = React.createClass({
	componentWillMount: function() {
			var newTodo = new TodoItem();
	},
	render: function(){
		return (
			<p>this is where the new item goes.</p>
		)
	}
})
