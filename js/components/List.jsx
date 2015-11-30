var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('../backbone');

var List = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        console.log("Hello, world! I am a CommentList.")
      </div>
    );
  }
});

var ListForum = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
       console.log("Hello, world! I am a CommentForm.");
      </div>
    );
  }
});

module.exports = List;
module.exports = ListForum;