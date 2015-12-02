var Backbone=require('backbone');
var BackboneParse = require('../../backbone-parse.js');

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

module.exports=listCollection;
