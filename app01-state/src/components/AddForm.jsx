import React, { useState } from 'react'
import './AddForm.css'

function AddForm({addData}) {
    const [name, setName] = useState()
    const onAdd = (e) => {
        e.preventDefault();
        const newStudent = {
            id : Math.floor(Math.random()*9999),
            name
        }
        addData(newStudent)
    }
    return (
    <div>
        <form onSubmit={onAdd}>
            <div className="mb-3 addform">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input onChange={(e) => setName(e.target.value)} className="form-control mx-5" name="name"/>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
  )
}
export default AddForm