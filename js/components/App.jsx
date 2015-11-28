var React = require('react');
var ReactDOM = require('react-dom');
var Paper = require('material-ui/lib/paper');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<h1>todos</h1>
					<div id="notepad">
						<Paper zDepth={4}>
						  <p>zDepth=4</p>
							<p>zDepth=4</p>
							<p>zDepth=4</p>
							<p>zDepth=4</p>
						</Paper>
					</div>
			</div>
		)
	}
});
