var React = require('react');
var ReactDOM = require('react-dom');
var Todo = require('./components/todo.jsx');

var Backbone = require('backbone');

ReactDOM.render(<Todo />, document.getElementById('addItem'));
