var React=require('react');
var ReactDOM=require('react-dom');

var ToDo = React.createClass({
	_handleClick: function(e) {
		e.preventDefault();
		var input = $("#newToDo").val();
		var newList = new listCollection();
		newList.set({
			'title':$("#newToDo").val()
		})
		newList.save(null,{
			success: function(resp) {
				console.log('resp');
			},
			error: function(err) {
				console.log('err');
			} 
		})
	},
	render: function(){
		return(
			<div>
				<h1>To Do App</h1>
				<form onSubmit={this._handleClick}>
					<input id="newToDo" placeholder="What needs to be done?"/>
				</form>
			</div>)
	}
});

var Sub = React.createClass({
	render:function() {
		var listData = this.props.data.map(function(obj){
			return (
				<span className="list">{obj.myList}</span>
				)
		})
		return(
			<div>{listData}</div>
			)
	}
});

ReactDOM.render(<ToDo />, document.getElementById('mainContainer'));