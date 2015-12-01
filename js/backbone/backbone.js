var Backbone = require('backbone-parse');

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'qcDfkE1uVCWcQ57Dks8oJqmvIUn1YP566iRRcwrQ',
    'X-Parse-REST-API-Key': 'WhQcyjYLOXfsD5XFboT6wvlZw2qeamHm5BFh9qnG'
  });


var Todo = Backbone.Model.extend({
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

var TodoForm = React.createClass({
  _submit: function(e) {
    e.preventDefault();
    var input = $('#input').val();
    var todo = new TodoList();
    todo.set({
      'ToDo':input
    })
    todo.save(null, {
      success: function(resp) {
        console.log('success', resp)
      },
      error: function(err) {
        console.log('error', err)
      },
    });
    $("#input").val('');
  },
  render: function() {
    return (
      <form onSubmit={this._submit}>
        <input id='input' type ='text' placeholder='Can Only post to parse?'/>
        <input type ='submit' value='Add'/>
      </form>
    )
  },
});

module.exports=TodoForm;



