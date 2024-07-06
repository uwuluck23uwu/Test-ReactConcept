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
      <div className="d-flex justify-content-center">{number}</div>
      <div className="d-flex justify-content-around">
        <button className="btn btn-primary" onClick={Add}>Add</button>
        <button className="btn btn-primary" onClick={Minus}>Minus</button>
        <button className="btn btn-primary" onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default App