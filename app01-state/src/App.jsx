import React from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'

function App() {
  return (
    <div>
      <Header title="Student list" major="Comcience"/>
      <StudentList/>
    </div>
  )
}
export default App