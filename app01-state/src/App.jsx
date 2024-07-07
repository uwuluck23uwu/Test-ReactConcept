import React, {useState} from 'react'
import Header from './components/Header'
import StudentList from './components/StudentList'
import AddForm from './components/AddForm'

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
  const addData = (newStudent) => {
    setData([...data, newStudent])
  }
  const deleteData = (id) => setData(data.filter((item) => item.id != id))
  return (
    <div>
      <Header title="Student list" major="Comcience"/>
      <AddForm addData={addData}/>
      <StudentList data={data} deleteData={deleteData}/>
    </div>
  )
}
export default App