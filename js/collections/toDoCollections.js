var Backbone = require('../backbone-parse');
var ToDoListModel = require('../models/toDoListModel.js');

var ToDoCollections = Backbone.Collection.extend({
	model: ToDoListModel,
	_parse_class_name: 'ToDoList'
});

module.exports = ToDoCollections;