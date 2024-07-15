import React from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()
  return (
    <div>
      <button className="btn btn-outline-dark" onClick={()=>navigate("/")}>goto Home</button>
    </div>
  )
}

export default Contact