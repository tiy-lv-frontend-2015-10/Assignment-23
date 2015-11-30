var Backbone = require ('backbone-parse');

var Todo = backbone.Model.extend({
	initialize: function () {

	},
	defualts: {
		item: null,

	},
	_parse_class: "Todo"

})

module.exports= Todo;