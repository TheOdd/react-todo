import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  'Clean the dishes',
  'Mow the lawn',
  'Get groceries',
  'Get birthday present for mom'
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
        {this.props.task}
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
          return <Todo task={task} />
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
