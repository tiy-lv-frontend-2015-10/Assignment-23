var React = require('react')
var Buttons = React.createClass({
	_destroy: function() {

	},
	render: function() {
		return(<button onClick={this._destroy}>Delete</button>)
	}
})

module.exports= Buttons;