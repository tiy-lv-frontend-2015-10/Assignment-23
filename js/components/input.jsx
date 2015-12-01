var React=require('react');
var ReactDOM =require('react-dom');
var App =require('./app.jsx');
var Backbone=require('backbone');
var BackboneParse = require('../../backbone-parse.js');
var ListItem = require('./listItem.jsx');


var List = Backbone.Model.extend({
			initialize: function() {
				console.log("a new model was created");
			},
			_parse_class_name: 'List'
		});

var listCollection = Backbone.Collection.extend({
			model: List,
			_parse_class_name: 'List'
		});	

var Input = React.createClass({
	_submit: function(e) {
		e.preventDefault();
		var props = this.props;
		console.log('props', props);
		listed = new List();
		var inputItem=$("#inputItem").val()
		listed.set({
			'list': inputItem
		})
		
		listed.save(null, {
	 		success: function(resp) {
	 			console.log(resp);
				props.addInput(inputItem);
				$("#input").val('')
	 		}
	 	});
	 	
	},
	render: function(){
		return(	<div>
				<h1>Todos</h1>
				<form onSubmit={this._submit}>
				<input id="inputItem" placeholder="What needs to be done?"/>
				</form>
			</div>
		)
	}
});

module.exports=Input;