var React = require('react');
var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');
var TextField = require('material-ui/lib/text-field');


module.exports = React.createClass({

	getInitialState: function(){
		return {
			text: ''
		}
	},
	_handleTextChange: function(evt) {
			this.setState({text: evt.target.value});
	},
	_handleUpdate: function(newTodo) {
		this.props.upList(newTodo);
	},
	_handleSubmit: function(e) {
		e.preventDefault();
		var newTodo = new TodoItem();
		newTodo.set({
			todoItem: this.state.text,
			active: true,
			completed: false
		});
		newTodo.save({}, {
			success: function(resp){
			},
			error: function(err){
				console.log(err);
			}
		});
		this._handleUpdate(newTodo);
		this.setState({text: ''});
	},

	render: function(){
		return (
		<form onSubmit={this._handleSubmit}>
			<TextField
  		hintText="Add ToDo Item Here..."
  		hintStyle={{fontStyle: 'italic'}} ref="userInput"
			autoFocus={true}
			value={this.state.text}
			onChange={this._handleTextChange}/>
		</form>
		)
	}
});
