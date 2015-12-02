var React=require('react');
var listCollection = require('../Model+Collections/models');


var Item= React.createClass({
	_delete: function() {
		var props=this.props;
		console.log(props);
		var collection = new listCollection(this.props);
		console.log(collection.toJSON());
		var item = collection.get(props.objectId);
		
		
		item.destroy({
			success: function() {
				props.addInput(collection.toJSON());
			}
		})
	},
	render: function() {
		
		
		return(
		<li className="task">
		<input type="checkbox" id={this.props.objectId}/>
		<label htmlFor={this.props.objectId}>{this.props.item}</label>
		<button className="delete" onClick={this._delete}>Delete</button>
		</li>
		)
	}

});


module.exports = Item;