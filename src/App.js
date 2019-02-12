import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';
class App extends Component {
	
	state={
		
		todos:[
		{
			id:1,
			title:'Playing',
			completed: false
		},
		{
			id:2,
			title:'dinner',
			completed: false
		},
		{
			id:3,
			title:'meeting',
			completed: false
		},
		
		
		]
	}
  render() {
    return (
      <div className="App">
       <Todo todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
