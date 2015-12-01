var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse');
var ToDoBanner = require('./toDoBanner.jsx');
var ToDoList = require('./toDoList.jsx');
var ToDoForm = require('./toDoForm.jsx');

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
	},
});

var Dos = React.createClass({
	render: function() {
		var doData = this.props.doItems.map(function(obj) {
			return (
				<div className="doData">
					<obj.ToDoList}
				</div>
				)
		})
		return (
			<div>{doData}</div>
			)
	}
});


ReactDOM.render(<ToDoApp />, document.getElementById('toDoDiv'));

//module.exports = ToDoApp;