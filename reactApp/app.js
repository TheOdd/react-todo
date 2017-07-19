import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
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

class InputLine extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <form>
        <input type="text"></input>
        <button type="submit">Add todo</button>
      </form>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li>
        <button>X</button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>
    )
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ul>
        {dummyData.map(task => {
          return <Todo task={task.taskText} completed={task.completed} />
        })}
      </ul>
    )
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
