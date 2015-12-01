var React = require('react');
var ReactDOM = require('react-dom');
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
	_handleClick: function(){
		this.setState({done: true})
	},
	render: function(){
		return (
			<div key={this.props.data.objectId} className="item-block">
				<li>
					<span><input className="check" type="checkbox" onClick={this._handleClick}/></span>
					<span className="text-place">{this.props.data.todoItem}</span>
				</li>
				<ListDivider />
			</div>
		)
	}
})
