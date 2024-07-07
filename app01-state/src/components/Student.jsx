import React from 'react'

function Student(data, deleteData) {
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
  )
}

export default Student