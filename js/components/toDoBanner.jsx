var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse.js');
require('../../../main.css');
require('../main.js');

var ToDoBanner = React.createClass({
	render: function() {
		return (
			<h1>TO DO List</h1>
		);
	}
});

ReactDOM.render(<ToDoBanner />, document.getElementById('bannerDiv'));

module.exports = ToDoBanner;