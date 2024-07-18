import React, { useState } from 'react'

export default function Crud01() {

    const [name,setName]=useState();
    const [subject,setSubject]=useState();
    const [city,setCity]=useState();
    const [editIndex, setEditIndex] = useState(null);

    const[data,setData]=useState([]);

    const handlesubmit=(e)=>{
        e.preventDefault();
       const Data ={name,subject,city};
       
       const Newdata=([...data,Data]) 
       console.log(Newdata);
       setData(Newdata)

       setName("");
       setSubject("");
       setCity("");
    }

const handleedit=(index)=>{
    let newEditeddata = data[index];
    setName(newEditeddata.name);
    setSubject(newEditeddata.subject);
    setCity(newEditeddata.city)
   
    setEditIndex(index);

}

const handledelete=(index)=>{
    data.splice(index,1);
    setData([...data]);
}

  return (
    <div>
        <h1>Crud</h1>
        <input type="text" placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)} value={name}/> 
        <input type="text" placeholder='Enter your Subject' onChange={(e)=>setSubject(e.target.value)} value={subject}/> 
        <input type="text" placeholder='Enter your City' onChange={(e)=>setCity(e.target.value)} value={city}/> 
        <button onClick={handlesubmit}>Submit</button>

        <table border={1} >
            <thead>
                <tr>
                    <td>name</td>
                    <td>subject</td>
                    <td>city</td>
                    <td colSpan={2}>Action</td>
                </tr>

            </thead>
            <tbody>
            {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.subject}</td>
                                <td>{item.city}</td>
                                <td>
                                    <button onClick={() => handleedit(index)}>Editt</button>
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
  )
}
