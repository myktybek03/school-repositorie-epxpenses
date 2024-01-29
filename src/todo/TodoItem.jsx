// src/TodoItem.js
import React from 'react'

const TodoItem = ({ todo, onToggle }) => {
   return (
      <li>
         <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
         />
         <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
         >
            {todo.text}
         </span>
      </li>
   )
}

export default TodoItem
