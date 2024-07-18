import React, { useState } from 'react'
import Childform from './Childform';

export default function Parentform() {
    const [data, setData] = useState(false)
    const [name, setName] = useState("")
    const [myname, setMyname] = useState("")

    const [subject, setSubject] = useState("");
    const [mysub, setMysub] = useState("");


    const [city, setCity] = useState("");
    const [mycity, setMycity] = useState("");

    const [email, setEmail] = useState("");
    const [myemail, setMyemail] = useState("");


    const [gender, setGender] = useState("");
    const [mygender, setMygender] = useState("");

    const handlesubmit = () => {
        // e.preventdefault();
        console.log("clicked");
        setData(true)
        setMyname(name)
        setMysub(subject)
        setMycity(city)
        setMyemail(email);
        setMygender(gender)

    }
    return (
        <div>
            {/* <form action=""> */}
            <div style={{ border: "1px solid black", width: "40%", textAlign: "center", margin: "0 auto", height: "250px",background: "linear-gradient(to left, #cd9cf2 0%, #f6f3ff 100%)"}}>

                <label htmlFor="">Enter your name :</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <br /><br />
                <label htmlFor="">Enter your subject :</label>
                <input type="text" onChange={(e) => setSubject(e.target.value)} />
                <br /><br />
                <label htmlFor="">Enter your city :</label>
                <input type="text" onChange={(e) => setCity(e.target.value)} />
                <br /><br />
                <label htmlFor="">Enter your Email :</label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                <br /><br />
                <label htmlFor="">Enter your Gender :</label>
                {/* <input type="text" placeholder='Gender' /> */}
                <input type="radio" name='gender' id='male' value="male" onChange={(e) => setGender(e.target.value)} />male
                <input type="radio" name='gender' id='female' value="female" onChange={(e) => setGender(e.target.value)} />female
                <br /><br />
                <button onClick={handlesubmit} >Submit</button>

            </div>
            {/* </form> */}

            {
                data && <Childform n={myname} s={mysub} c={mycity} e={myemail} g={mygender} />
            }

        </div>
    )
}
