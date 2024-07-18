import { Box, Button, Card, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Loginpage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 
  const navigate = useNavigate();

  const handlesubmit = () => { 
    navigate("/dashboard");
  }
  useEffect(()=>{
    document.body.style.background= "url(bgimg03.jpg)no-repeat center / cover"
  })
  return (
    <div  style={{ paddingTop: "80px" }} >
      <Card sx={{
        width: '40%', m: '0 auto',
        backdropFilter: 'blur(5px)',
        boxShadow: '0 10px 32px rgba(31, 38, 135, 0.37)',
        background: 'rgba(255 , 255, 255, 0.1)',
      }}>
        <Box sx={{ gap: '10px', display: 'flex', flexDirection: 'column', width: '50%', m: '0 auto', p: "20px", }}>
          <Typography variant='h5' sx={{ textAlign: 'center' }}>User Login</Typography>
          <TextField id="outlined-Email-input" label="email" type="email" autoComplete="current-email" />
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button onClick={handlesubmit} variant="contained" disableElevation> Submit </Button>
        </Box>
      </Card>
    </div>
  )
}
