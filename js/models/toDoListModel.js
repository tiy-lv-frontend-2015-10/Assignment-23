var Backbone = require('../backbone-parse');

var ToDoListModel = Backbone.Model.extend({
	validate: function() {
		
		},

	_parse_class_name: "ToDoList"
});

module.exports = ToDoListModel;