var React = require('react');
var Backbone = require('../backbone-parse');
var Paper = require('material-ui/lib/paper');
var List = require('material-ui/lib/lists/list');
var TodoListItem = require('./TodoListItem.jsx');
var ListFooter = require('./listFooter.jsx');

module.exports = React.createClass({

	render: function() {
		var props = this.props;
		return (
			<div id="todo-panel" >
				<Paper id='todo-backing' zDepth={4}>
				<ul>
					{this.props.list.map(function(item){
						return <TodoListItem handleRender={props.handleRender} data={item} key={item.objectId} items={props.list} objectId={item.objectId} item={item.todoItem} status={item.status} />
					})}
				</ul>
				</Paper>
				<ListFooter list={this.props.list} />
			</div>
		)
	},
})
// items={props.list}
// allList={props._allList} downlist={props._downList} hotList={props._hotList}
// allList={this.props._allList} downlist={this.propse._downList} hotList={this.props._hotList}
// delist={this.props._delist}
