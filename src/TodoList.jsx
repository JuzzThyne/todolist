import React from 'react'

const TodoList = ({todos, onDelete}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} className="bg-primary mx-6 my-2 rounded-lg py-2 px-8 flex justify-between">
          {todo.todoName}
          <span className="text-red text-right px-2 cursor-pointer" onClick={() => onDelete(index)}>X</span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList