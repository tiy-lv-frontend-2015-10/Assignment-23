var React = require('react');
var ReactDOM = require('react-dom');
var ToDoBanner = require('./toDoBanner.jsx');
var ToDoList = require('./toDoList.jsx');
//var ToDoListItem = require('./toDoListItem.jsx');
//var ToDoListModel = require('../models/toDoListModel.js');
var ToDoForm = require('./toDoForm.jsx');
var ToDoCollections = require('../collections/toDoCollections.js');

var ToDoApp = React.createClass({

	getInitialState: function() {
		return {
			items: this.props.items.toJSON()
	}
},
	updateItems: function(newItem) {
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function() {
		return (
			<div>
				<ToDoBanner />
				<ToDoList items={this.state.items} />
				<ToDoForm onFormSubmit={this.updateItems} />
			</div>
		);
	},
});

ReactDOM.render(<ToDoApp />, document.getElementById('toDoAppDiv'));

module.exports = ToDoApp;
