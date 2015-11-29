var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');
var AddNew = require('./AddNew.jsx');
var Todo = require('./Todo.jsx');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>todos</h1>
					<div id="notepad">
						<Paper zDepth={5}>
						  <AddNew />
							<Todo />
						</Paper>
						
						<div id="bottom_edge">
							<Paper className="layer1"></Paper>
							<Paper className="layer2"></Paper>
							<Paper className="layer3"></Paper>
						</div>
					</div>
			</div>
		)
	}
});
