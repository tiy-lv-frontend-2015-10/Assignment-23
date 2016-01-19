var Backbone = require('../backbone-parse.js');
var BackboneParse= require('../backbone-parse.js');

var ParseData =Backbone.Model.extend({
	initialize: function () {
		console.log('new ParseData has been created');
	},
	defualts: function(){
		item: null
	},	
	model: ParseData,
	_parse_class_name: 'Todo'
});

var Parsedata = Backbone.Collection.extend({
	model: ParseData,
	_parse_class_name: 'Todo'
});

var parseData = new ParseData();

parseData.fetch({
	success: function(resp) {
		var data = resp.toJSON();
		console.log(data);
	}

})

