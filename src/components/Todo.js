import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
  render() {
    return this.props.todos.map((item)=>(
	<TodoItem lis={item}/>
	));
  }
}

export default Todo;
