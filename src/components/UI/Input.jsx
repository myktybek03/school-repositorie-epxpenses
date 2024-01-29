import React from 'react'
import './Input.css'

const Input = (props) => {
   return (
      <div>
         <label className="label" htmlFor={props.id}>
            {props.children}
         </label>
         <input
            type={props.type}
            id={props.id}
            className="input"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
         />
      </div>
   )
}

export default Input
