import React, { useState } from 'react';
import "../Pizza/Taskmanager.css";

export default function Taskmanager01() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [priority,setPriority]=useState("");
  const [result, setResult] = useState([]);

  const [editindex, setEditindex] = useState(null);

  const handleEdit = (index) => {
    const fetchData = result[index]
    console.log(fetchData);
    setName(fetchData.name);
    setSubject(fetchData.subject);
    setCity(fetchData.city);
    setEditindex(index);
  };

  const handleDelete = (index) => {
    let updatedResult = [...result];
    updatedResult.splice(index, 1);
    setResult(updatedResult);
  };

  const handleSubmit = () => {
    const newrecord = { name, subject, city,priority }
    localStorage.setItem("data", JSON.stringify(name, subject, city,priority));
    if (editindex != null) {
      const updateRecord = [...result]
      // const fetchData=result[editindex]
      updateRecord[editindex] = newrecord;
      setResult(updateRecord)
      // console.log(fetchData);
      // fetchData[index]=newrecord
    }
    else {

      setResult([...result, newrecord]);
    }

    setName("");
    setSubject("");
    setCity("");



  }
  // setResult([...result, { name, subject, city }]);
  // setName("");
  // setSubject("");
  // setCity("");






  return (

    <div >
      <div className='task-border'>
        {/* <h1>Task Manager</h1> */}
        <input className='in' type='text' value={name} placeholder='Enter Employee name' onChange={(e) => setName(e.target.value)} />
        <input className='in' type='text' value={subject} placeholder='Enter task subject' onChange={(e) => setSubject(e.target.value)} />

        <input className='in' type='date' value={city} placeholder='' onChange={(e) => setCity(e.target.value)} />
        <select name="" id="" style={{ height: "40px" }} onChange={(e)=>setPriority(e.target.value)}>
          <option value="">Please choose an option</option>
          <option >LOW</option>
          <option >MEDIUM</option>
          <option >HIGH</option>

        </select>
        <button className='bt' onClick={handleSubmit}>submit</button>
      </div>
      <table className='t1' border={1}>
        <thead>
          <tr className='mytr'>
            <th>Name</th>
            <th>Subject</th>
            <th>Date</th>
            <th>Priority</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => (
            <tr key={index} className='mytr2'>
              <td style={{fontSize:"20px", paddingLeft:"20px"}}>{item.name}</td>
              <td style={{fontSize:"20px" ,paddingLeft:"20px"}}>{item.subject}</td>
              <td style={{fontSize:"20px",paddingLeft:"20px"}}>{item.city}</td>
              <td style={{fontSize:"20px",paddingLeft:"20px"}}>{item.priority}</td>
              <td> <button className='edtbtn' style={{ backgroundColor: "green" }} onClick={() => handleEdit(index)}>edit</button></td>
              <td><button className='edtbtn' style={{ backgroundColor: "red" }} onClick={() => handleDelete(index)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}