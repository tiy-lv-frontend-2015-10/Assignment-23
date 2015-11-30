var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse.js');
require('./toDoBanner.jsx');
require('./toDoList.jsx');
require('./toDoForm.jsx');
require('../../main.css');
require('../main.js');

var ToDoApp = React.createClass({
	getInitialState: function() {
		return {items: []};
	},
	updateItems: function(newItem) {
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function() {
		return (
			<div>
				<ToDoBanner/>
				<ToDoList items={this.state.items}/>
				<ToDoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

ReactDOM.render(<ToDoApp />, document.getElementById('toDoDiv'));

//module.exports = ToDoApp;