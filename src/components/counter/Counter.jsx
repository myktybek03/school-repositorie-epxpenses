import React, { useState } from 'react'

function Counter() {
   // Используем хук useState для создания переменной состояния
   const [count, setCount] = useState(0)

   //    const incrementHandler = () => {
   //       setCount + 1
   //    }

   //    const decrementHandler = () => {
   //       setCount - 1
   //    }

   return (
      <div>
         <p>Count: {count}</p>
         {/* Используем функцию setCount для обновления состояния */}
         <button onClick={() => setCount(count + 1)}>Increment</button>
         <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
   )
}

export default Counter
