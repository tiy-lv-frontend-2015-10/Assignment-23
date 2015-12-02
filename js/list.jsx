var Backbone = require ('../backbone-parse.js');
var ReactDOM = require('react-dom');
var React = require('react');
var Backbone = require ('backbone');


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
		var data=data.toJSON();
		console.log(data);
		
	},error: function(err){
		console.log("error: ", err);
	}
})

var Input = React.creatClass({
	render: function() {
		return(
			<div>
				<input placeholder="hey" />
			</div>

			)
	}
});

modules.exports= Input;
