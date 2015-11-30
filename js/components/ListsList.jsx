var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');



var ListsList = React.createClass ({
	render: function() {
		return (
			<div className="commentbox">
				<h1> comments </h1>
				<List />
				<ListForum />
			</div>

			);
	}

});

module.exports= ListsList;