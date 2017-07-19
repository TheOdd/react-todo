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
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control"></input>
            <div type="submit" className="btn btn-primary input-group-addon">Add todo</div>
          </div>
        </div>
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
        <button className="btn btn-danger removeButton">X</button>
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
        {this.props.todos.map(task => {
          return <Todo task={task.taskText} completed={task.completed} />
        })}
      </ul>
    )
  }
}

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

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
