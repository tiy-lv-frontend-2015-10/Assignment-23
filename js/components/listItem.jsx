var React = require ('react');
var ReactDOM = require ('react-dom');
var Backbone = require ('backbone');
var BackboneParse = require ('../../backbone-parse.js');
var App = require ('./mainApp.jsx');
var Todo = require ('./listToDo.jsx');


var ListItem = Backbone.Model.extend({
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
			itemData = {resp.toJSON()};
			console.log('success ', resp);
		},
		error: function(err) {
			console.log('err ', err);
		},
	});

var Item = React.createClass({
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

module.exports = listItem;