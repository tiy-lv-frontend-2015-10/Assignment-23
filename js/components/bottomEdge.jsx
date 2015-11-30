var React = require('react');
var Paper = require('material-ui/lib/paper');

module.exports = React.createClass({
	render: function() {
		return (
			<div id="bottom_edge">
				<Paper className="layer1"></Paper>
				<Paper className="layer2"></Paper>
			</div>
		)
	}
})
