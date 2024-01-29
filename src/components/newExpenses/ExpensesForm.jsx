import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import './ExpensesForm.css'

const ExpensesForm = ({ onClick, onSubmit }) => {
   const [inputText, setInputText] = useState('')
   const [inputNumber, setInputNumber] = useState(0)
   const [inputDate, setInputDate] = useState(null)

   const getInputValue = (e) => {
      setInputText(e.target.value)
   }

   const getNumberValue = (e) => {
      setInputNumber(e.target.value)
   }

   const getDateValue = (e) => {
      setInputDate(e.target.value)
   }

   const submitHandler = () => {
      const product = {
         title: inputText,
         price: inputNumber,
         date: inputDate,
      }
      onSubmit(product)
      setInputText('')
      setInputNumber('')
      setInputDate('')
   }

   console.log(inputText)

   return (
      <form>
         <div className="expense-form_input">
            <Input
               value={inputText}
               type="text"
               placeholder="Заголовок"
               children="Заголовок"
               onChange={getInputValue}
            />
            <Input
               value={inputNumber}
               type="number"
               placeholder="Количество"
               children="Количество"
               onChange={getNumberValue}
            />
            <Input
               value={inputDate}
               type="date"
               placeholder="Датировать"
               children="Датировать"
               onChange={getDateValue}
            />
            <div className="button">
               <Button onClick={onClick} marginRight="20px">
                  Отмена
               </Button>
               <Button onClick={submitHandler}>Добавить расходы</Button>
            </div>
         </div>
      </form>
   )
}

export default ExpensesForm
