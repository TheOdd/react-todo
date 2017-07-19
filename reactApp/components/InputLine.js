import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      typedText: ''
    }
  }

  handleTyping(e) {
    this.setState({
      typedText: e.target.value
    })
  }

  handleSubmit() {
    this.props.submit(this.state.typedText)
    this.setState({
      typedText: ''
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    this.handleSubmit()
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleFormSubmit(e)}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" value={this.state.typedText} onChange={(e) => this.handleTyping(e)}></input>
            <div type="submit" className="btn btn-primary input-group-addon" onClick={() => this.handleSubmit()}>Add todo</div>
          </div>
        </div>
      </form>
    )
  }
}

export default InputLine
