import React from 'react'
import './Button.css'

const Button = (props) => {
   return (
      <button
         style={{ marginRight: props.marginRight }}
         onClick={props.onClick}
      >
         {props.children}
      </button>
   )
}

export default Button
