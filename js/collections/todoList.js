var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');


var TodoList = Backbone.Collection.extend({
	model: TodoItem,
	_parse_class_name: "Todo"
}); 

module.exports = TodoList;
