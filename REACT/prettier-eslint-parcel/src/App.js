import React, { useState, useEffect } from 'react'

const App = () => {
  const initialState = 0
  const [count, setCount] = useState(initialState)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count + 5)}>increment by 5</button>
    </div>
  )
}

export default App
