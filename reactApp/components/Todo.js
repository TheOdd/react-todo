import React from 'react';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <button className="btn btn-danger removeButton" onClick={() => this.props.xClick()}>X</button>
        <div style={{display: 'inline'}} onClick={() => this.props.taskClick()}>          
          {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
        </div>
      </li>
    )
  }
}

export default Todo;
