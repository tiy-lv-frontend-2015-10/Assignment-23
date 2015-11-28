var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('./backbone-parse');
var App = require('./components/App.jsx');
var AddNew = require('./components/AddNew.jsx')
var ToDo = require('./components/Todo.jsx');
var ListItem = require('./components/ListItem.jsx');
require("../css/main.css");



ReactDOM.render(<App />, document.getElementById('container'))
