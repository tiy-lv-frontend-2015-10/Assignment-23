var React=require('react');

var Item= React.createClass({

	render: function() {
		var props=this.props;
		
		return(
		<li className="task">
		<input type="checkbox"/>
		<label>{this.props.item}</label>
		<button className="delete">Delete</button>
		</li>
		)
	}

});


module.exports = Item;