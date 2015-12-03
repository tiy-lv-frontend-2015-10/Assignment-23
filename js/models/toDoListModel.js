var Backbone = require('../backbone-parse');

var ToDoListModel = Backbone.Model.extend({
	validate: function() {
		console.log("to do list model");
		},

	_parse_class_name: "ToDoList"
});

module.exports = ToDoListModel;
