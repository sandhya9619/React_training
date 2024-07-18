import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import {  useNavigate } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { Upload } from '@mui/icons-material';

export default function Dashboard() {
    const[userDetails,setUserDetails] =useState(null);
    const [profileurl,setProfileUrl]=useState();
    const[uploadingstatus,setUploadingStatus] =useState(false);


    const Navigate = useNavigate();

    useEffect(()=>{
        const subscirbe = onAuthStateChanged(auth,(user)=>{
            if (user) {
                
                fetchCurrentUserDetails();
            }
        })
    }, []);

    const fetchCurrentUserDetails=async(user)=>{
        // const user = auth.currentUser;
        if (user) {
            const userData = await getDoc(doc(db,"student", user.uid));
            // const userData = await getDoc(doc(db,"student", user.uid ));
            console.log(`Welcome Dashboard ${userData.data().name}`);
            setUserDetails(userData.data())
        }
    }

    const handleLogout= async ()=>{
        await signOut(auth);
        Navigate("/login", {replace:true})
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log("----> profileurl",profileurl);
        setUploadingStatus(true);

        const user = auth.currentUser;

        if(user){
            const storageRef =  ref(storage,`profilepicture/${user.uid}`);
            await uploadBytes(storageRef,profileurl);

            const downloadUrl = await getDownloadURL(storageRef);

            console.log("----->downloadurl", downloadUrl);

            await updateDoc(doc(db,"student", user.uid),{
                "profilepic" : downloadUrl
            });

        }

        setUploadingStatus(false);


    }
  return (
    <div>
        
    {userDetails ?  <h1>Welcome {userDetails.name}  email : {userDetails.email}</h1> : <h1>Loading....</h1>}
        {userDetails?.profilepic ? <img src={userDetails?.profilepic} width={50} height={50}></img> : <img src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049569.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707177600&semt=ais" width={50} height={50}></img>}
        <form onSubmit={(e)=>handlesubmit(e)}>
            <label>Upload your image</label>
            <input type='file'  onChange={(e)=>setProfileUrl(e.target.files[0])}></input>
            <input type='submit' value="upload"></input>
        </form>
    
    <button onClick={handleLogout}>Logout</button>

    <h1 onClick={()=>Navigate("/newpost")}>Add New Post</h1>

    <h1 onClick={()=>Navigate("/mypost")}>View My Post</h1>

    <h1 onClick={()=>Navigate("/viewpost")}>View All Post</h1>

    <h1 onClick={()=>Navigate("/alluser")}>All users</h1>

    
</div>
  )
}
