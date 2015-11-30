var Backbone = require('backbone-parse');

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'qcDfkE1uVCWcQ57Dks8oJqmvIUn1YP566iRRcwrQ',
    'X-Parse-REST-API-Key': 'WhQcyjYLOXfsD5XFboT6wvlZw2qeamHm5BFh9qnG'
  }
});

var Todo = backbone.Model.extend({
	initialize: function () {

	},
	defualts: {
		item: null,

	},
	_parse_class: "Todo"

})

var todo = backbone.Collection.extend({
	model: Todo,
	_parse_class: "Todo"
})

var TodoCollection = new Todo;

TodoCollection.fetch({
	success: function(resp){
		console.log("success: ", resp);
	},error: function(err){
		console.log("error: ", err);
	}
})
},
error: function(err){
	console.log(err)
} 
});




