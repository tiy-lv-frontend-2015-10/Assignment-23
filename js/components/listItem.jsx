var React = require ('react');
var ReactDOM = require ('react-dom');
var Backbone = require ('backbone');
var BackboneParse = require ('../../backbone-parse.js');


var listItem = Backbone.Model.extend({
			initialize: function() {
			},
			defaults: {
				title: null
			},
			_parse_class_name: 'myList'
		});

	var listCollection = Backbone.Collection.extend({
		model: listItem,
		_parse_class_name: 'myList'
	});

	var lists = new listCollection();


 	lists.fetch({
 		success: function(resp) {
			data = (resp.toJSON());
			console.log('success ');
			itemData = (resp.toJSON());
			ReactDOM.render(<Sub itemData = {itemData} />, document.getElementById('subContainer'))
			console.log('success ', resp);
 		},
 		error: function(err) {
 			console.log('err ');
		}
		},
 	});
 
var Sub = React.createClass({
	render: function() {
		var listData = this.props.itemData.map(function(obj){
			return (
				<table key={obj.itemData} className="list">{obj.myList}</table>
			)
		})
		return (
			<div>{listData}</div>
		)
	}
});
var ToDo = React.createClass({
	_handleSubmit: function(e) {
		e.preventDefault();
		var newListItem = new listItem();
		newListItem.set({
			title: $("#newToDo").val()
		})
		title: $('#newToDo').val("");
			newListItem.save(null, {
				success: function(resp) {
					console.log('success ', resp);
					listCollection.fetch({
						success: function(resp){
							console.log('success ', resp);
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
