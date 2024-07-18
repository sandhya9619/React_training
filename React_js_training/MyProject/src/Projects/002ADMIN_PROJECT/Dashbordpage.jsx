import {
  AppBar, Avatar, Card, CardMedia, Container, IconButton,
  Menu, MenuItem, Toolbar, Tooltip, Typography, Box,
  Button
} from '@mui/material';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storage } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { brown } from '@mui/material/colors';
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

export default function DashboardPage() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [profileUrl, setProfileUrl] = useState();
  const [uploadingStatus, setUploadingStatus] = useState(false);
  const [profileLogin, setProfileLogin] = useState(false);
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    setProfileLogin(!profileLogin);
  };

  const fetchProfileDetails = async () => {
    const user = auth.currentUser;
    if (user) {
      const userData = await getDoc(doc(db, "student", user.uid));
      console.log(`welcome ${userData.data().name}`);
      setProfileData(userData.data());
    }
  };

  useEffect(() => {
    document.body.style.background = "url(bg2.jpeg) no-repeat center/cover";
    document.body.style.height = "90vh";
    const subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchProfileDetails(user);
      }
    });
    return () => subscribe(); // Clean up subscription on unmount
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("......>ProfileURL", profileUrl);
    setUploadingStatus(true);
    const user = auth.currentUser;

    if (user) {
      const storageRef = ref(storage, `profilepicture/${user.uid}`);
      await uploadBytes(storageRef, profileUrl);
      const downloadUrl = await getDownloadURL(storageRef);
      console.log("----->downloadUrl", downloadUrl);
      await updateDoc(doc(db, 'student', user.uid), {
        "profilePic": downloadUrl
      });

      const userData = await getDoc(doc(db, "student", user.uid));
      console.log("userdata--->>>", userData.data());
      setProfileData(userData.data());
    }
    setUploadingStatus(false);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/", { replace: true });
  };
  const addpost = async () => {
    navigate("/addpost")
  }

  return (
    <Box>
      <AppBar sx={{ bgcolor: '#1769aa' }}>
        <Container>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h3' sx={{ color: 'white', fontSize: '30px', fontFamily: 'cursive' }}>
                Welcome {profileData?.name}
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ textAlign: 'right', borderRadius: '50px' }}>
                  {profileData?.profilePic
                    ? <img src={profileData?.profilePic} width={50} height={50} style={{ borderRadius: "40px" }} alt="Profile Pic" />
                    : <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg" width={50} height={50} style={{ borderRadius: '50px' }} alt="Default Pic" />
                  }
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
                <hr />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <hr />
                <MenuItem onClick={addpost}>Add Post</MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="div" sx={{ backgroundImage: 'url(bg.jpeg)', width: "100vw", height: "100vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", alignContent: 'center', backgroundColor: '#CAF4FF' }}>
        <br /><br /><br /><br />
        {
          profileLogin
            ?
            <Card sx={{ backdropFilter: 'blur(5px)', background: 'rgba(225, 225, 225, 0.1)', boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)', color: 'brown', width: '35%', m: '0 auto', padding: '10px', borderRadius: '30px', border: '1px solid darkblue', height: '300px', backgroundColor: 'white' }}>
              <Container>
                <CardMedia sx={{ height: '130px', width: '130px', borderRadius: '50px', margin: '0 auto' }}>
                  <Avatar sx={{ height: '130px', width: '130px', borderRadius: '50px' }} alt="Profile Picture" src={profileData?.profilePic} />
                </CardMedia>
                <Typography sx={{ padding: '10px', color: 'black' }}>
                  {profileData
                    ? <Box sx={{ padding: '10px', textAlign: 'center', color: brown[700], borderRadius: '50px' }}>
                      <Typography variant='h5' sx={{ color: 'black' }}>Welcome {profileData.name}</Typography>
                      <Typography>Email: {profileData.email}</Typography><br />
                      {/* <Button
                      onSubmit={handleSubmit}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                      >
                        Upload file
                        <VisuallyHiddenInput type="file" onChange={(e) => setProfileUrl(e.target.files[0])} />
                      </Button> */}
                      <form onSubmit={handleSubmit} style={{ color: brown[700], fontSize: '10px' }}>
                        <input id="profilePicUpload" type='file' onChange={(e) => setProfileUrl(e.target.files[0])} />
                        <input type='submit' value='Upload' />
                      </form>
                    </Box>
                    : "Loading..."}
                </Typography>
              </Container>
            </Card>
            : <Typography variant='h5' sx={{ textAlign: 'center', alignContent: 'center', fontSize: '50px', fontFamily: 'monospace', color: brown[700] }}>
              Welcome <br /> to <br /> user page
            </Typography>
        }
      </Box>

    </Box>
  );
}
