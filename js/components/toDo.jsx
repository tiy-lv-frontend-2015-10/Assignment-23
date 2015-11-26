var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var ToDoApp = React.createClass({
	getInitialState: function(){
		return {items: []};
	},
	updateItems: function(newItem){
		var allItems = this.state.items.concat([newItem]);
		this.setState({items: allItems});
	},
	render: function(){
		return (
			<div>
				<TodoBanner/>
				<TodoList items={this.state.items}/>
				<TodoForm onFormSubmit={this.updateItems}/>
			</div>
		);
	}
});

ReactDOM.render(<ToDoApp />, document.getElementById('toDoDiv'));

module.exports = ToDoApp;