var React = require ('react');
var ReactDOM = require ('react-dom');
var Backbone = require ('backbone');
var BackboneParse = require ('../../backbone-parse.js');
var App = require ('./mainApp.jsx');
var listItem = ('./listItem.jsx');

var ToDo = React.createClass({
	_handleSubmit: function(e) {
		e.preventDefault();
		var newItem = new ListItem();

		newItem.set({
			title: $("#newToDo").val()
		})
		title: $('#newToDo').val("");
			newItem.save(null, {
				success: function(resp) {
					console.log('success ', resp);
					listCollection.fetch({
						success: function(resp){
						},
						error: function(err){
						}
					})
				},
				error: function(err) {
					console.log('err ');
				} 
			})
	},
	render: function(){
		return (
			<div>
				<h1>To Do App</h1>
				<form onSubmit={this._handleSubmit}>
					<input id="newToDo" placeholder="What needs to be done?"/>
				</form>
			</div>
		)
	}
});
ReactDOM.render(<ToDo />, document.getElementById('mainContainer'));
module.exports = ToDo;