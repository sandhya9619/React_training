import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export default function Loginpage() {
    const [email,setEmail]=useState();
    const[password,setpassword]=useState();

    const navigate = useNavigate();

    const handlesubmit = async (e)=>{
        e.preventDefault();
        const userCreditential= await signInWithEmailAndPassword(auth,email,password)

        const user = userCreditential.user;

        const userDoc = await getDoc(doc(db,"student", user.uid));
        if(userDoc.exists)
          {
            console.log(userDoc.data());
            console.log(userDoc.data().name);
            alert(`Welcome ${userDoc.data().name}`);
            navigate("/dashboard",{replace:true})
          }
        console.log(user.uid);
    }
    
  return (
    <div>
        <form action="" onSubmit={(e)=>handlesubmit(e)}>
            <input type="text" placeholder='Enter email'  onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)} />
            <button>submit</button>
            <h4 onClick={()=>navigate("/",{replace:true})}>new user ? click here for register </h4>
        </form>
    </div>
  )
}
