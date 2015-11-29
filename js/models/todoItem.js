var Backbone = require('../backbone-parse');

var TodoItem = Backbone.Model.extend({
	initialize: function(){

	},
	defaults: {
		todoItem: null,
		active: null,
		completed: null
	},
		_parse_class_name: "Todo"
})

module.exports = TodoItem;
