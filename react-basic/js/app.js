var React = require('react');
var Render = require('react-dom').render;
class HelloWorld extends React.Component {
	render(){
		return (<div>Hello {this.props.name}!</div>);
	}
}
Render(<HelloWorld name = "Chris Harrington"/>,document.getElementById('hello-world'));


class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {secondsElapsed : 0}
	}
	tick(){
		this.setState((prevState) => {
			return {secondsElapsed : prevState.secondsElapsed  + 1};
		})
	}
	componentDidMount(){
		this.interval = setInterval(() => this.tick(), 1000);
	}
	componentWillUnmount() {
    	clearInterval(this.interval);
  	}
	render() {
	    return (
	      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
	    );
	  }
}

 //Render(<Timer/>,document.getElementById('timer'));

class TodoApp extends React.Component{
 	constructor(props){
 		super(props);
 		this.handleChange = this.handleChange.bind(this);
 		this.handleSubmit = this.handleSubmit.bind(this);
 		this.state = {items: [],text: ''};
 	}
 	render(){
 		return(
 			<div>
        		<h3>TODO</h3>
        		<TodoList items = {this.state.items}/>
        		<form onSubmit={this.handleSubmit}>
          			<input onChange={this.handleChange} value = {this.state.text} />
          			<button>{'Add #' + (this.state.items.length + 1)}</button>
        		</form>	
        	</div>
 			);
 	}
 	handleChange(e){
 		this.setState({text: e.target.value});
 	}
 	handleSubmit(e) {
 		e.preventDefault();
 		var newItem = {
      		text: this.state.text,
      		id: Date.now()
    	};
    	this.setState((prevState) => {
    		return {
    			items : prevState.items.concat(newItem),
    			text :  ''
    		}
    	})
 	}
}

class TodoList extends React.Component{
	render(){
		return(
			<ul>
		        {this.props.items.map(item => (
		          <li key={item.id}>{item.text}</li>
		        ))}
      		</ul>
			);
	}
}

Render(<TodoApp/>,document.getElementById('todo-app')); 