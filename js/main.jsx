var React=require('react');
var ReactDOM=require('react-dom');
require('../main.css');
var App = require('./components/app.jsx');
var listCollection = require('./Model+Collections/models');



var collection = new listCollection();

		collection.fetch({
			success: function(resp) {
				item=resp.toJSON();
				
				ReactDOM.render(<App item={item}/>,document.getElementById('app'));
			}
		})



