import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={ this.getStyle() }>
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}></input> {' '}
          { title }
          <button style={btnstyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
}

const btnstyle = {
  background: "none",
  color: "#333",
  border: "none",
  padding: "5px 9px",
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem
