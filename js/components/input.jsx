var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');


var Input = React.createClass({
	render: function() {
		return(
			<div>
				<input placeholder="What do you want from me" />
			</div>
			)
	}

})

module.exports = Input;