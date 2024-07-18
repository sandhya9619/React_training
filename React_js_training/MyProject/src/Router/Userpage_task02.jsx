import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Homepage_task01 from './Homepage_task01';

export default function Userpage_task02() {
    const [name, setName] = useState("");
    const [Subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGEnder] = useState("");
    const [City, setcity] = useState("");
    const [data, setData] = useState([]);
    const inputref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        // inputref.current.value;
        var data = JSON.parse(localStorage.getItem("student")) || [];

        // let id = data.length + 1;

        let obj = {

            name: name,
            Subject: Subject,
            email: email,
            gender: gender,
            City: City
        }
        // data.push(obj);
        setData(obj)


        // let newdata={name,Subject,email,gender,City};
        // setData([...data,newdata]);

        localStorage.setItem('data', JSON.stringify(data));
        // setData((prevData) => {
        //     const updatedData = [...prevData, newData];
        //     localStorage.setItem('data', JSON.stringify(updatedData));
        //     return updatedData;
        //   });
        //   setName("");
        //   setSubject("");
        //   setEmail("");
        //   setGEnder("");
        //   setcity("");

    }

    // useEffect(() => {
    //     const storedData = JSON.parse(localStorage.getItem('data'));
    //     if (storedData) {
    //       setData(storedData);
    //     }
    //   }, []);

    // useEffect(() => {
    //     localStorage.setItem('data', JSON.stringify(data));
    //   }, [data]);

    //   useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('data'));
    //     if (data) {
    //      setItems(data);
    //     }
    //   }, []);

    return (
        <div>
            {/* <h3> Userpage </h3> */}
            <Homepage_task01 ref={inputref} data={data} />
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={Subject} placeholder='Enter Subject' onChange={(e) => setSubject(e.target.value)} />
                <input type="text" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" value={gender} placeholder='Enter Gender' onChange={(e) => setGEnder(e.target.value)} />
                <input type="text" value={City} placeholder='Enter City' onChange={(e) => setcity(e.target.value)} />

                <Link to={"/"}> <button>Submit</button></Link>
            </form>
        </div>
    )
}
