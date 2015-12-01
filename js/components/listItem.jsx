var React=require('react');
var ReactDOM=require('react-dom');
var Backbone = require('backbone');
var BackboneParse = require('../../backbone-parse.js');




var ListItem = React.createClass({
	_click: function() {
		console.log("test");
		
	},
   	render:function() {
		var listData=this.props.data.map(function(obj){
			return(<div key={obj.objectId} className="listContainer">
						<Sub/>
						<p className="task">{obj.list}</p>

					</div>
			)
		})
		return(<div>{listData}
				<p>{this.props.val}</p>
			</div>)
	}

})

var Sub = React.createClass({
	
	render: function() {
		return(<input onChange={this._click} className="check" type="checkbox"/>)
	}
})


module.exports = ListItem;