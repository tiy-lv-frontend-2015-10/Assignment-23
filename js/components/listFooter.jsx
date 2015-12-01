var React = require('react');
var Paper = require('material-ui/lib/paper');
var FlatButton = require('material-ui/lib/flat-button');
var RaisedButton = require('material-ui/lib/raised-button');
var BottomEdge = require('./bottomEdge.jsx');
module.exports = React.createClass({
	render: function(){
		return (
			<div id="foot-pad">
			<Paper id="list_footer" zDepth={4}>
				<span id="left-todo"># left</span>
					<div id="button-panel">
							<div className="filters"><RaisedButton className={'buttons'} labelStyle={{fontSize: '0.4rem'}} label="All" /></div>
							<div className="filters"><RaisedButton className={'buttons'} labelStyle={{fontSize: '0.4rem'}} label="Active" /></div>
							<div className="filters"><RaisedButton className={'buttons'} labelStyle={{fontSize: '0.4rem'}} label="Completed" /></div>
							<div className="filters"><RaisedButton className={'buttons'} labelStyle={{fontSize: '0.4rem'}} label="Clear Completed" /></div>
					</div>
			</Paper>
			<BottomEdge />
			</div>
		)
	}
})
