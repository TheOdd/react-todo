import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';

var dummyData = [
  {
    taskText: 'Clean the dishes',
    completed: false
  },
  {
    taskText: 'Mow the lawn',
    completed: true
  },
  {
    taskText: 'Get groceries',
    completed: false
  },
  {
    taskText: 'Get birthday present for mom',
    completed: true
  }
]

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  addTodo(task) {
    dummyData.push({
      taskText: task,
      completed: false
    })
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;