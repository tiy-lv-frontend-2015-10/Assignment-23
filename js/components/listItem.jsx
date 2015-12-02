var React=require('react');
var ReactDOM=require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../../backbone-parse.js');
var Item = require('./item.jsx');




var ListItem = React.createClass({
	
   	render:function() {
		var props=this.props.item;
		
		return(<ul className="listContainer">
				{this.props.item.map(function(item){
					return(<Item item={item.list}/>)
				})}	
				</ul>

			)
		}		
});

module.exports = ListItem;