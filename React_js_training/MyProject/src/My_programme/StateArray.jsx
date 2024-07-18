import React, { useState } from 'react'

export default function StateArray() {
    const [myArray, setMyArray] = useState([]);
    const [subject, setSubject] = useState("");
    const [reverse, setReverse] = useState([])

    const handleevent = () => {
        setMyArray([...myArray, subject])
    }

    const handlereverse = () => {
        setReverse([...myArray].reverse());
    }

    let change=(e)=>
    {
        console.log(e.value);
    }

    return (
        <div style={{background:"url('https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&w=600')no-repeat center center/cover",width:"100%",height:"100vh"}}>
            <input type="text" placeholder='Enter subject' onChange={(e) => setSubject(e?.target?.value)} />
            <button onClick={handleevent}>check</button>
            <button onClick={handlereverse} >Reverse</button>
            <br /><br />
            <ul >

                {

                    myArray.map((e, i) => {
                        return <li key={i} onClick={change(Event)} style={{backgroundColor:"gray", width:"70px", height:"20px",listStyleType:"none", padding:"5px", textAlign:"center"}}>{e}</li>
                    })


                }
            </ul>
            
            <ul>

                {

                    reverse.map((e, i) => {
                        return <li key={i} >{e}</li>
                    })


                }
            </ul>
        </div>
    )
}
