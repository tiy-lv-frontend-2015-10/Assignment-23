var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../backbone-parse');
require('../../main.css');
require('../main.js');

var ToDoBanner = React.createClass({
	render: function() {
		return (
			<h1 className="header">TO DO List</h1>
		);
	}
});

ReactDOM.render(<ToDoBanner />, document.getElementById('bannerDiv'));

module.exports = ToDoBanner;