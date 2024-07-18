import React, { useState } from 'react'

export default function Crudrevision() {
    const[name,setName]=useState("")
    const[subject,setSubject]=useState("")
    const[city,setCity]=useState("");

    const[result,setResult]=useState([]);

    const[editIndex,setEditIndex]=useState(null)


    const handlesubmit=(e)=>{
        e.preventDefault();
        let newrecord={name,subject,city};
        setResult([...result,newrecord]);

        setName("")
        setSubject("")
        setCity("")

    }

    const handledelete=(index)=>{
        result.splice(index,1);
        setResult([...result]);
    }

    const handleedit=(index)=>{
        let neweditindex = result[index];
        setName(neweditindex.name);
        setSubject(neweditindex.subject);
        setCity(neweditindex.city);

        setEditIndex(neweditindex.editIndex)
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder='Enter your subject' value={subject} onChange={(e)=>setSubject(e.target.value)} />
            <input type="text" placeholder='Enter your city' value={city} onChange={(e)=>setCity(e.target.value)} />
            <button type='submit'>submit</button>
        </form>
        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>subject</th>
                    <th>city</th>
                    <th colSpan={2}>Action</th>
                </tr>
            </thead>
            <tbody>
                { result.map((item,index)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td><button onClick={()=>handleedit(index)}>Edit</button></td>
                                <td><button onClick={()=>handledelete(index)}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
