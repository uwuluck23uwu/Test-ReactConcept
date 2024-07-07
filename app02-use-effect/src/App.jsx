import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  const [Text, setText] = useState()

  const add = () => {
    setCount(count+1)
  }
  const reset = () => {
    setCount(0)
  }
  const subtract = () => {
    setCount(count-1)
    setText('')
  }
  const changeText = () => {
    let temp = count<0 ? "ข้อความน้อยกว่า 0 ครับ" : ""
    setText(temp)
  }

  useEffect(() => {
    console,console.log("1. ทำครั้งแรกและครั้งเดี่ยว");
  }, [])
  useEffect(() => {
    console,console.log("2. ทำครั้งแรกและทุกครั้งที่ state เปลี่ยน" + count);
    changeText();
  })
  useEffect(() => {
    console,console.log("3. ทำครั้งแรกและเมื่อเงื่อนไขมีการเปลี่ยนค่า" + count);
  }, [count > 10, Text])

  return (
    <div className='container'>
      <h1>{Text}</h1>
      <h2>{count}</h2>
        <div>
          <button type="button" className="btn btn-primary" onClick={add}>Add</button>
          <button type="button" className="btn btn-secondary mx-5" onClick={reset}>Reset</button>
          <button type="button" className="btn btn-success" onClick={subtract}>Subtract</button>
        </div>
    </div>
  )
}
export default App