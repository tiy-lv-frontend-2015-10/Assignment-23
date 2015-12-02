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

    var data = resp.toJSON();
    console.log(data);
    ReactDOM.render(<TodoForm data={data}/>, document.getElementById('listItem'));

  }
});

var TodoForm = React.createClass({
  render: function() {
    var mapped = this.props.data.map(function(obj) {
    return (
      <div key={obj.objectId}>
        <ul>
          <li>
            {obj.ToDo}
          </li>
        </ul>
      </div>
    )
  })
    return (<div>{mapped}</div>)
  }
});

var FormInput = React.createClass({
  _submit: function(e) {
    e.preventDefault();
    var input = $('#input').val();
    var todo = new TodoList();
    todo.set({
      'ToDo':input
    })
    todo.save(null, {
      success: function(resp) {
        TodoListsCollection.fetch({
  success: function(resp) {

    var data = resp.toJSON();
    console.log(data);
    ReactDOM.render(<TodoForm data={data}/>, document.getElementById('listItem'));

  }
});
        console.log('success', resp)
      },
      error: function(err) {
        console.log('error', err)
      }
    })
    $("#input").val('')
  },
  render:function() {
    return(
      <form onSubmit={this._submit}>
        <input id='input' type ='text' placeholder='Can Only post to parse?'/>
        <input type ='submit' value='Add'/>
      </form>
    )
  }
});
var Total = React.createClass({
   render:function() {
    return(
      <div>
        <FormInput/>
        <TodoForm/>
      </div>
    )
  }
});

module.exports=Total;
module.exports=FormInput;
