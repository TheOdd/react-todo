import React from 'react';
import Todo from './Todo';

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

export default TodoList;
