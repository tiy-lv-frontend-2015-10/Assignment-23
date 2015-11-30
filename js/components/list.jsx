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

	var List = new listItem();

	var listCollection = Backbone.Collection.extend({
		model: listItem,
		_parse_class_name: 'myList'
	});

	var lists = new listCollection();

	lists.fetch({
		success: function(resp) {
			data = (resp.toJSON());
			console.log('success ');
		},
		error: function(err) {
			console.log('err ');
		}
	});

ReactDOM.render(<Sub data = {data} />, document.getElementById('subContainer'));