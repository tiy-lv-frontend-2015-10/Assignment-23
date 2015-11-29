var React = require('react');
var ReactDOM = require('react-dom');



var List = React.createClass ({
	render: function() {
		return(
			<div>
				<input className="listInput" placeholder="What needs to be done" />
			</div>
		)
	}

}); 

module.exports=List;