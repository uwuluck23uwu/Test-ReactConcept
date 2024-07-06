import React, { useState } from 'react'

function App() {
  const [number, setNumber] = useState(1)
  const Add = () => {
    setNumber(number+1)
  }
  const Minus = () => {
    setNumber(number-1)
  }
  const Reset = () => {
    setNumber(0)
  }
  return (
    <div>
      {number}
      <button onClick={Add}>Add</button>
      <button onClick={Minus}>Minus</button>
      <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default App