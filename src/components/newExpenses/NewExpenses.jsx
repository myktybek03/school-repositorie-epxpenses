import React, { useState } from 'react'
import Button from '../UI/Button'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'

const NewExpenses = ({ onSubmit }) => {
   const [showForm, setShowForm] = useState(false)

   function openAndCloseExpensesFormHandler() {
      setShowForm((prev) => !prev)
   }
   return (
      <div className="new-expense ">
         {showForm ? (
            <ExpensesForm
               onClose={openAndCloseExpensesFormHandler}
               onSubmit={onSubmit}
            />
         ) : (
            <Button onClick={openAndCloseExpensesFormHandler}>
               Добавить новый расход
            </Button>
         )}
      </div>
   )
}

export default NewExpenses
