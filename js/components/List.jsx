var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var List = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
});

var ListForum = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

module.exports = List;
module.exports = ListForum;