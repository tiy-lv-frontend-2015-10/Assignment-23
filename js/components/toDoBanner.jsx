var React = require('react');
var ReactDOM = require('react-dom');
require('../../main.css');

var ToDoBanner = React.createClass({
	render: function(){
		return (
			<h3>TO DO List</h3>
		);
	}
});

ReactDOM.render(<ToDoBanner />, document.getElementById('bannerDiv'));

module.exports = ToDoBanner;