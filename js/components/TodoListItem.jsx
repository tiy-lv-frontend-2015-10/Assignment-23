var React = require('react');
var Backbone = require('../backbone-parse');
var TodoItem = require('../models/todoItem');
var Paper = require('material-ui/lib/paper');
var Checkbox = require('material-ui/lib/checkbox');
var ListItem = require('material-ui/lib/lists/list-item');
var ListDivider = require('material-ui/lib/lists/list-divider');



module.exports = React.createClass({
	componentWillMount: function(){
		var todoListItem = new TodoItem(this.props.data);
	},
	getInitialState: function(){
		return {
			text: this.props.data.todoItem,
			active: this.props.data.active,
			done: this.props.data.completed
		}
	},
	_handleDoneChange: function(e){
		e.preventDefault();
		// this.setState({done: true}),
		$('.text-place').toggleClass('strikeout');
	},
	_handleDelete: function(){

	},
	render: function(){
		return (
			<div key={this.props.data.objectId} id={this.props.data.objectId} className="item-block">
				<li>
					<span><input className="check" type="checkbox" onChange={this._handleDoneChange}/></span>
					<span className="text-place">{this.props.data.todoItem}</span>
					<span className="x-out" onClick={this._handleDelete}>X</span>
				</li>
				<ListDivider />
			</div>
		)
	}
})
