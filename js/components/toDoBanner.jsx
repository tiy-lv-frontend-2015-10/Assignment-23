var React = require('react');

var ToDoBanner = React.createClass({
	render: function() {
		return (
			<div>
			<h1 className="header">TO DO List</h1>
			</div>
		);
	}
});

ReactDOM.render(<ToDoBanner />, document.getElementById('bannerDiv'));

module.exports = ToDoBanner;
