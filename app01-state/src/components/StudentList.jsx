import React, {useState} from 'react'
import Student from './Student'
import './StudentList.css'

function StudentList({data, deleteData}) {
    const [show, setShow] = useState(true)
    return (
        <main>
            <div className='summary'>
                <p style={{ backgroundColor: "cyan", fontStyle: "italic" }}>All Student : {data.length}</p>
                <button className="btn btn-primary" onClick={()=>setShow(!show)}>{show ? "Hidden" : "Show"}</button>
                {show && Student(data, deleteData)}
            </div>
        </main>
    );
}
export default StudentList