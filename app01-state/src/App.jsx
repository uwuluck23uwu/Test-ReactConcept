import React, {useState} from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'

function App() {
  let students = []
  for (let index = 1; index <= 5; index++) {
      let student = {
        id : index,
        name : "Coffee" + index
      }
      students.push(student)
  }
  const [data, setData] = useState(students)
  const deleteData = (id) => setData(data.filter((item) => item.id != id))
  return (
    <div>
      <Header title="Student list" major="Comcience"/>
      <StudentList data={data} deleteData={deleteData}/>
    </div>
  )
}
export default App