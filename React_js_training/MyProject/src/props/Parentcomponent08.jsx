import React, { useState } from 'react'
import Childcomponent08 from './Childcomponent08';

export default function Parentcomponent08() {
    const[data,setData]=useState([]);

    const [name, setName] = useState("");

    const [subject, setSubject] = useState("");

    const [city, setCity] = useState("");



    const handlesubmit = () => {
        setData([...data,{Name:name,City:city,Subject:subject}])
        setName("");
        setCity("");
        setSubject("");

    }
    return (
        <div>
            <input type="text" placeholder='Enter your name' onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder='Enter your subject' onChange={(e)=>setSubject(e.target.value)} />
            <input type="text" placeholder='Enter your city'onChange={(e)=>setCity(e.target.value)} />

            <button onClick={handlesubmit}>Submit</button>

            <Childcomponent08 data ={data}/>
        </div>

  
    )
  
}
