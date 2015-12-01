var React=require('react');
var ReactDOM=require('react-dom')
var Input = require('./input.jsx');
var ListItem = require('./listItem.jsx');
var Buttons = require('./buttons.jsx');

var List = Backbone.Model.extend({
			initialize: function() {
				console.log("a new model was created");
			},
			_parse_class_name: 'List'
		});
		var listCollection = Backbone.Collection.extend({
			model: List,
			_parse_class_name: 'List'
		});

		var lists = new listCollection();

		lists.fetch({
			success: function(resp) {
				data=resp.toJSON();
				console.log(data);
				ReactDOM.render(<App data={data}/>,document.getElementById('app'));
			}
		})

var App = React.createClass({
	getInitialState: function () {
		return {
			data: this.props.data,
			val: ""
		}
	},
	_addInput: function(val) {
		this.setState({
			val: val
		})

	},
	render: function() {
		return(
			<div>
				<Input addInput={this._addInput}/>
				<ListItem data={this.state.data} val={this.state.val}/>
				<Buttons/>
			</div>
		)
	}
});




module.exports=App;

