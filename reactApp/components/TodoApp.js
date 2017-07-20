import React from 'react';
import TodoList from './TodoList';
import InputLine from './InputLine';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    axios.get(dbUrl + '/all')
    .then(response => {
      this.setState({
        todos: response.data
      })
    })
  }

  addTodo(task) {
    axios.post(dbUrl + '/add', {
      task: task
    })
    .then(response => {
      this.setState({
        todos: this.state.todos.concat(response.data)
      })
    })
    .catch(err => (console.log(err)))
  }

  removeTodo(id) {
    axios.post(dbUrl + '/remove', {
      taskId: id
    })
    .then(response => {
      var index;
      this.state.todos.forEach((obj, idx) => {
        if (obj._id === id) {
          index = idx;
        }
      })
      var tempTodos = this.state.todos.slice()
      tempTodos.splice(index, 1)
      this.setState({
        todos: tempTodos
      })
    })
  }

  toggleCompleted(id) {
    axios.post(dbUrl + '/toggle', {
      taskId: id
    })
    .then(response => {
      var index;
      this.state.todos.forEach((obj, idx) => {
        if (obj.id === id) {
          index = idx;
        }
      })
      var tempTodos = this.state.todos.slice()
      tempTodos.splice(index, 1, response.data)
      this.setState({
        todos: tempTodos
      })
    })
  }

  render() {
    return (
      <div>
        <InputLine submit={(task) => this.addTodo(task)}/>
        <TodoList todos={this.state.todos} todoXClick={(idx) => this.removeTodo(idx)} todoTaskClick={(id) => this.toggleCompleted(id)} />
      </div>
    )
  }
}

export default TodoApp;
