import React from 'react'
import './ExpensesCard.css'
import Button from '../UI/Button'

const ExpensesCard = ({ el, onDelete }) => {
   // const { date } = el
   // const year = date.getFullYear()
   // const day = date.getDay()
   return (
      <div className="expense-item">
         {/* <div className="expense-date">{`${day}/${year}`}</div> */}
         <h2 className="title">{el.title}</h2>
         <div className="item">
            <span className="price">{el.price} сом</span>
         </div>
         <Button onClick={() => onDelete(el.id)}>delete</Button>
      </div>
   )
}

export default ExpensesCard
