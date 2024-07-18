import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../../firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Divider, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export default function Addpost() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState();

    const navigate = useNavigate();
    const handleSubmit = async () => {

        const user = auth.currentUser;
        const storageRef = await ref(storage, `post/${user.uid}/${Date.now()}`);
        await uploadBytes(storageRef, imageLink);
        const downloadUrl = await getDownloadURL(storageRef)

        await setDoc(doc(db, "Post", `${Date.now()}`), {
            'title': title,
            'description': description,
            'image': downloadUrl,
            'userid': user.uid,
            'timestamp': Date.now()
        })

        // navigate("/viewpost", { replace: true });
    }
    useEffect(()=>{
        document.body.style.background='#4B70F5'
    })
    return (
        <div>
            <Card sx={{padding:'20px',width:'450px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'20px',marginTop:'100px'}}>
                <Typography>Add new post</Typography>
                <TextField type='text' placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
                <TextField placeholder='Enter Discription' onChange={(e) => setDescription(e.target.value)} />
                {/* <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" onChange={(e) => setImageLink(e.target.files[0])} />
                </Button>
                <Button onClick={handleSubmit}>Add post</Button> */}
                 <form onSubmit={handleSubmit} style={{ color: 'black', fontSize: '10px' }}>
                        <input id="profilePicUpload" type='file' onChange={(e) => setImageLink(e.target.files[0])} />
                        <input type='submit' value='Upload' />
                      </form>
            </Card>
        </div>
    )
}
