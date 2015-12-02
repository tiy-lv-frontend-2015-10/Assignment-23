var React = require('react');

var ToDoBanner = React.createClass({
	render: function() {
		return (
			<h1 className="header">TO DO List</h1>
		);
	}
});

ReactDOM.render(<ToDoBanner />, document.getElementById('bannerDiv'));

module.exports = ToDoBanner;