import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react'
import { auth, db } from '../../firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function Registrationpage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [error, setError] = useState();
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("---> submit button clicked");

    try {
      const userCreditials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCreditials.user;
      if (user) {
        await setDoc(doc(db, "student", user.uid), {
          'name': name,
          'email': email,
        })
        console.log("successfully record inserted");
        setMsg("successfully record inserted");
      }
    }
    catch (e) {
      setError(e.message)

    }

  }
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <h1>{error}</h1>}
        <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter email' onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder='Enter password' onChange={(e) => setpassword(e.target.value)} />
        <button>Submit</button>
      </form>
      <h4 onClick={() => navigate("/login")}>go to login page</h4>
      <Link to="/guest">go to guest</Link>
    </div>
  )
}
