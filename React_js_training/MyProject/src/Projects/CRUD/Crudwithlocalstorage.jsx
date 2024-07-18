import React, { useState } from 'react'

export default function Crudwithlocalstorage() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");

    const [result, setResult] = useState([]);
    const [editindex, setEditindex] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("button subbmited");

        const newrecord = { name, subject, city }
        if (editindex != null) {
            const updateRecord = [...result]
            updateRecord[editindex] = newrecord;
            setResult(updateRecord)
            
        }
        else {

            setResult([...result, newrecord]);
        }

        setName("");
        setSubject("");
        setCity("");
        
          

    }

    const handleDelete = (index) => {
        console.log(index);

        console.log(result);
        let lastrecord = result;
        console.log("before delete", lastrecord);
        lastrecord.splice(index, 1)
        // index ki ek value remove krne k liye

        console.log("...", lastrecord);

        setResult([...lastrecord])
        // ... spread oprator
    }

    const handleEdit = (index) => {
        console.log(index);
        const fetchData = result[index]
        console.log(fetchData);
        setName(fetchData.name);
        setSubject(fetchData.subject);
        setCity(fetchData.city);
        setEditindex(index);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' style={{ border: "1px solid black", width: "20%" }} value={name} placeholder='enter name' onChange={(e) => setName(e.target.value)} /><br></br>
                <input type='text' style={{ border: "1px solid black", width: "20%" }} value={subject} placeholder='enter subject' onChange={(e) => setSubject(e.target.value)} /><br></br>
                <input type='text' style={{ border: "1px solid black", width: "20%" }} value={city} placeholder='enter city' onChange={(e) => setCity(e.target.value)} /><br></br>
                <button style={{ marginLeft: "30px" }} >{editindex != null ? "update" : "submit"}</button><br></br>
            </form>
            <table border={1}>
                <thead>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>cuty</th>
                    <th colSpan={2}>Action</th>

                </thead>
                <tbody>
                    {
                        result.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td><button onClick={() => handleEdit(index)}>edit</button></td>
                                <td><button onClick={()=>handleDelete(index)}>delete</button></td>

                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}