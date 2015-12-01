var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse');
//var Backbone = require('../backbone');
//var parseCred = require('./parse-credentials.json');


var ToDoListModel = Backbone.Model.extend({
	initialize: function() {
		console.log("a new list has been created");
	},
	defaults: {
		items: null,
	},
	_parse_class_name: "ToDoList"
})

var toDoListCollection = Backbone.Collection.extend({
	model: listItems,
	_parse_class_name: "ToDoList"
});

var lists = new toDoListCollection();
	lists.fetch({
		success: function(resp) {
			doItems = resp.toJSON();
			console.log('success ', resp);
		},
		error: function(err) {
			console.log('err ', err);
		},
});



module.exports = ToDoListModel;