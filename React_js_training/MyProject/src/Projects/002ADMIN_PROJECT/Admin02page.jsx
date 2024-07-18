import {  Button, Card, TextField, Typography,Box, } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Admin02page() {
    const [email, setEmail] = useState();
    const [password, setpassword] = useState();
    // let img = "05image.jpg"
    const navigate = useNavigate();

    const handlsubmit = () => {
        console.log("clickedddddd");
        navigate("/admindash")
    }
    useEffect(()=>{
        document.body.style.background = "#4B70F5" ;
    })

    return (
        <div style={{paddingTop:"50px"}}>
            <Card 
            sx={{width : '40%' , m : '0 auto',
                backdropFilter : 'blur(5px)',
                boxShadow : '30px 30px 30px  rgba(31, 38, 135, 0.37)' ,
                background : 'rgba(255 , 255, 255, 0.1)',
                backgroundColor:"white",
                height:"500px"
            }}>
            <Box sx={{ gap : '25px', display : 'flex', flexDirection : 'column', width : '50%', m : '0 auto', p : "20px"}}>
                <Typography variant='h4' sx={{textAlign : 'center'}}>Admin Login</Typography>
                <TextField id="outlined-Email-input" label="email" type="email" />
                <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password"  />
                <Button onClick={handlsubmit} variant="contained" disableElevation > Submit </Button>
                <Button onClick={()=>navigate("user")} variant="outlined" disableElevation> User Registration </Button>
            </Box>
            </Card>
        </div>
    )
}
