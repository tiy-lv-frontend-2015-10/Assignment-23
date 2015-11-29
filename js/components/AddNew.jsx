var React = require('react');
var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');
var TextField = require('material-ui/lib/text-field');


module.exports = React.createClass({
	// componentWillMount: function() {
	//
	// },
	getInitialState: function(){
		return {
			text: ''
		}
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var newTodo = new TodoItem();
		newTodo.set({
			todoItem: this.state.text,
			active: true,
			completed: false
		});
		newTodo.save({}, {
			success: function(resp){
				console.log(resp);
			},
			error: function(err){
				console.log(err);
			}
		});
		this.setState({text: ''})
	},
	 handleTextChange: function(evt) {
			 this.setState({text: evt.target.value});
			 console.log(this.state.text);
	 },
	render: function(){
		return (
		<form onSubmit={this.handleSubmit}>
			<TextField
  		hintText="Add ToDo Item Here..."
  		hintStyle={{fontStyle: 'italic'}} ref="userInput"
			autoFocus={true}
			value={this.state.text}
			onChange={this.handleTextChange}/>
		</form>
		)
	}
});
