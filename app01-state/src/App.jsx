import React, { useState } from 'react'

export const App = () => {
  let students = []
  for (let index = 1; index <= 5; index++) {
    let student = {
      id : index,
      name : "Coffee" + index
    }
    students.push(student)
  }
  const [data, setData] = useState(students)
  const deleteData = (id) => {
    setData(data.filter((item) => item.id != id))
  }
  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.name}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>deleteData(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default App;