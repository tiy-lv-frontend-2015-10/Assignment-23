var React = require('react');
var ToDoBanner = require('./toDoBanner.jsx');
var ToDoList = require('./toDoList.jsx');
var ToDoForm = require('./toDoForm.jsx');
var toDoCollections = require('../collections/toDoCollections.js');

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
				<ToDoBanner/>
				<ToDoList items={this.state.items}/>
				<ToDoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	},
});

module.exports = ToDoApp;




ReactDOM.render(<ToDoApp />, document.getElementById('toDoDiv'));

//module.exports = ToDoApp;