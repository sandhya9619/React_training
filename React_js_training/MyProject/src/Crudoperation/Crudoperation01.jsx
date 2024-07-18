
import React, { useState } from 'react'

export default function Crudoperation01() {
    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");

    const [editIndex, setEditIndex] = useState(null);
    
    const [records, setRecords] = useState([]);
    // let id = records.length + 1;

    const handleSubmit = (e) => {
        e.preventDefault();

        let Newrecords = { name, subject, city };
        if (editIndex != null) {
            const updaterecord = [...records]
            updaterecord[editIndex] = Newrecords;
            setRecords(updaterecord)

            // const fetchData = records[editIndex]
            // fetchData[index] = Newrecords;
            // console.log(fetchData);
        }
        else {
            setRecords([...records, Newrecords]);

        }

        setName("");
        setSubject("");
        setCity("");
    };
    const handledelete = (index) => {
        // setRecords(records.filter((item) => item.id !== id));
     
        // let lastrecords = records;
        // lastrecords.splice(index, 1);
        // setRecords([...lastrecords]);
        records.splice(index,1);
        setRecords([...records]);
    };

    const handleEdit = (index) => {
        let newEditedRecord = records[index];
        setName(newEditedRecord.name);
        setSubject(newEditedRecord.subject);
        
        setCity(newEditedRecord.city);
        setEditIndex(index);
        // setRecords([...newEditedRecord]);
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name:" />
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="subject:" />
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="city:" />
                <button type="submit"> {editIndex != null ? "Update" : "Submit"}</button>
            </form>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                </td>
                                <td>
                                    <button onClick={() => handledelete(index)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}