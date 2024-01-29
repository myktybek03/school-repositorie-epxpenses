import React, { useState } from 'react'
import Button from '../UI/Button'
import ExpensesForm from './ExpensesForm'
import './NewExpenses.css'

const NewExpenses = ({ onSubmit }) => {
   //    const state = useState()
   //    console.log(state[0], 'state')
   // console.log(state[1], 'state');

   const [showForm, setShowForm] = useState(false)

   //    let open = false

   function openAndCloseExpensesFormHandler() {
      //   open = true
      // setState(true)
      setShowForm((prev) => !prev)
   }
   return (
      <div className="new-expense ">
         {showForm ? ( // open
            <ExpensesForm
               onClick={openAndCloseExpensesFormHandler}
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
