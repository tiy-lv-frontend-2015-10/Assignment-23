require('../css/main.css');
var React = require('react');
var ReactDOM = require('react-dom');
var ToDoApp = require('./components/toDoApp.jsx');
var ToDoCollections = require('./collections/toDoCollections');

var collection = new ToDoCollections();

collection.fetch({
	success: function(items) {
		ReactDOM.render(<ToDoApp items={items} />, document.getElementById('container'));
	}
});