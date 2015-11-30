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

module.exports = ToDoList;