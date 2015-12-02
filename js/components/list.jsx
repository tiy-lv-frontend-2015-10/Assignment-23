var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse.js');


var List = Backbone.Model.extend({
  initialize: function() {
    },
    Defaults: {
      item: null
    },
    model: List,
    _parse_class_name:'listItem'
});

var Lists = Backbone.Collection.extend({
  model: List,
  _parse_class_name:'listItem'
});

var ListsCollection = new Lists();

ListsCollection.fetch({
  success: function(resp) {
    var data = resp.toJSON();
    console.log(data);
    ReactDOM.render(<AddForm data={data}/>, document.getElementById('add'));

  }
});

var AddForm = React.createClass({
   _delete: function () {
    var ListsCollection = new Lists();
    var item = ListsCollection.get(this.props.objectId);
    var props = this.props;
    item.destroy({
      success: function () {
        ReactDOM.render(<AddForm data={data}/>, document.getElementById('add'));
      }
    });
  },

  render: function() {
    var mapped = this.props.data.map(function(list) {
    return (
      <div key={list.objectId}>
        <ul>
          <li>
           {list.item}
          </li>
        </ul>
      </div>
    )
  })
    return (<div>{mapped}</div>)
  }
});

var AddInput = React.createClass({
  _submit: function(e) {
    e.preventDefault();
    var add = $('#addItem').val();
    var item = new List();
    item.set({
      'item':add
    })
    item.save(null, {
      success: function(resp) {
        ListsCollection.fetch({
  success: function(resp) {
    var data = resp.toJSON();
    console.log(data);
    ReactDOM.render(<AddForm data={data}/>, document.getElementById('add'));
  }
});
        console.log('success', resp)
      },
      error: function(err) {
        console.log('error', err)
      }
    })
    $("#addItem").val('')

  },
  render:function() {
    return(
      <form onSubmit={this._submit}>
        <input id='addItem' type ='text' placeholder = "add new item"/>
        <input type ='submit' value='Add'/>
      </form>
    )
  }
});
var ToDo = React.createClass({
   render:function() {
    return(
      <div>
        <AddInput/>
        <AddForm/>
      </div>
    )
  }
});

module.exports=ToDo;
module.exports=AddInput;