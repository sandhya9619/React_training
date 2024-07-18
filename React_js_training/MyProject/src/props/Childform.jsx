import React from 'react'

export default function Childform(props) {
    return (
        <div style={{textAlign:"center"}}>

            <div style={{background:"linear-gradient(to top, #b465da 0%,#cd9cf2 100%)",borderRadius:"10px", width:"400px",height:"450px",marginLeft:"430px",marginTop:"20px"}}>
                <div style={{width:"150px",borderRadius:"50%",height:"150px",border:"1px solid black",margin:"0 auto",marginTop:"20px",background:"url(https://img.freepik.com/premium-psd/3d-cartoon-woman-smiling-portrait-isolated-transparent-background-png-psd_888962-1571.jpg)no-repeat center center/cover"}}></div>
                <p style={{border:"1px solid black",width:"250px",marginLeft:"70px",borderRadius:"5px",height:"30px"}}>{props.n}</p>
                <p style={{border:"1px solid black",width:"250px",marginLeft:"70px",borderRadius:"5px" ,height:"30px"}}>{props.s}</p>
                <p style={{border:"1px solid black",width:"250px",marginLeft:"70px",borderRadius:"5px" ,height:"30px"}}>{props.c}</p>
                <p style={{border:"1px solid black",width:"250px",marginLeft:"70px",borderRadius:"5px",height:"30px"}}>{props.e}</p>
                <p style={{border:"1px solid black",width:"250px",marginLeft:"70px",borderRadius:"5px" ,height:"30px"}}>{props.g}</p>
            </div>   

        </div>
    )
}
