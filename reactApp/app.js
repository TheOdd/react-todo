import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  'Clean the dishes',
  'Mow the lawn',
  'Get groceries',
  'Get birthday present for mom'
]

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

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
