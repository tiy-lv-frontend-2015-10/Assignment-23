var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../../backbone-parse.js');

var TodoList = Backbone.Model.extend({
  initialize: function() {
    },
    Defaults: {
      ToDo: null
    },
    model: TodoList,
    _parse_class_name:'ToDoList'
});

var TodoLists = Backbone.Collection.extend({
  model: TodoList,
  _parse_class_name:'ToDoList'
});

var TodoListsCollection = new TodoLists();

TodoListsCollection.fetch({
  success: function(resp) {
    console.log('success', resp);
  },
  error: function(err) {
    console.log('error', err);
  }
});

var todolist = new TodoList();

todolist.set({

})

todolist.save(null, {
  success: function(resp) {
    console.log("success", resp);
  },
  error: function(err) {
    console.log("error", err)
  }
});
