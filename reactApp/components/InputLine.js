import React from 'react';

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

export default InputLine
