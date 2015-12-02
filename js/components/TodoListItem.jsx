var React = require('react');
var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');
var TodoList = require('../collections/todoList');
var ListDivider = require('material-ui/lib/lists/list-divider');



module.exports = React.createClass({
	componentWillMount: function(){
		var todoListItem = new TodoItem(this.props.data);
	},
	getInitialState: function(){
		return {
			text: this.props.data.todoItem,
			isChecked: this.props.status === 'done',
      status: this.props.status === 'done' ? 'done' : 'active'
		}
	},
	_handleCheckboxChange: function(e){
		var collection = new TodoList(this.props.items);
		console.log(collection);
		var item = collection.get(this.props.objectId);
		console.log(item);
		var isDone = !this.state.isChecked;

		this.setState({isChecked: !this.state.isChecked,
			status: isDone ? 'done' : 'active'
				});
		item.set({
      status: isDone ? 'done' : 'active'
    });
		item.save();
	},

	_handleDelete: function(){
		var collection = new TodoList(this.props.items);
    var item = collection.get(this.props.objectId);
    var props = this.props;

    item.destroy({
      success: function () {
  		props.handleRender(collection.toJSON());
      }
    });
	},
	render: function(){
		return (
			<div  id={this.props.data.objectId} className="item-block">
				<li>
					<span><input className="check" type="checkbox" id={this.props.objectId} onChange={this._handleCheckboxChange} checked={this.state.isChecked}/></span>
					<label className={this.state.status} htmlFor={this.props.objectId}>{this.state.text}</label>
					<button className="x-out" onClick={this._handleDelete}>X</button>
				</li>
				<ListDivider />
			</div>
		)
	}
})
// console.log(collection.toJSON());
// todoListItem = todoListItem.toJSON();
// collection.get(this.props.objectId);
// console.log(todoListItem);
