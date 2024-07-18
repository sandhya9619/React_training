import { Box, Button, Card, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Userpage() {
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
      console.error(e.message)
      setError(e.message)
    }
  }
  useEffect(() => {
    // document.body.style.background = "url(bgimg02.jpg) no-repeat center / cover"
    document.body.style.background = "#96C9F4"

  })
  return (
    <div style={{ paddingTop: "60px" }}>
      <Card sx={{
        width: '40%', m: '0 auto',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
        background: 'rgba(255 , 255, 255, 0.1)',
      }}>
        <Box  sx={{ gap: '10px', display: 'flex', flexDirection: 'column', width: '50%', m: '0 auto', p: "20px", }}>
        {msg && <p style={{color:"green"}}>{msg}</p>}
          <Typography variant='h5' sx={{ textAlign: 'center' }}>User Registration</Typography>
          <TextField id="outlined-Email-input" label="name" type="name" autoComplete="current-name" onChange={(e) => setName(e.target.value)} />
          <TextField id="outlined-Email-input" label="email" type="email" autoComplete="current-email" onChange={(e) => setEmail(e.target.value)} />
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={(e) => setpassword(e.target.value)} />
          <Button variant="contained" disableElevation onClick={handlesubmit}> Submit </Button>
          <Button onClick={() => navigate("/login")} variant="outlined" disableElevation>User Login </Button>
        </Box>
      </Card>
    </div>
  )
}
