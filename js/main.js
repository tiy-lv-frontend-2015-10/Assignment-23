$(document).ready(function(){

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'efLV9fVDe5jmrjnjGyph9QZMvf16mdWwGfGawP8y',
    'X-Parse-REST-API-Key': 'LxFtzH8uzVKv2vOjUgL66vohuBvMyQrUQQqz07NC'
  }
});

var ToDoList = Backbone.Model.extend({
	initialize: function() {
		console.log("a new list has been created");
	},
	defaults: {
		items: null,
	},
	_parse_class_name: "ToDoList"
});


var MyDoList = new ToDoList();
	
	MyDoList.fetch({
		success: function(resp) {
			data=(resp.toJSON());
			console.log("success: ", resp);
		}, 
		error: function(err) {
			console.log("error: ", err);
		},
		ReactDOM.render(<MyDoList data={data} />, document.getElementById('subDiv'))
	});

		


});//closes document ready
