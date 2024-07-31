import React from 'react'
import Checkbox from './Checkbox'

const SingleTodoItem = ({todo}) => {
  return (
    <div className="todo" key={todo.id}>
            <div className="todo-item">
              <Checkbox />
              <p>{todo.title}</p>
            </div>
          </div>
  )
}

export default SingleTodoItem