import React from 'react'
import { Box, Card, CardContent, CardActions, Button, Toolbar, Typography, Divider, MenuItem, Grid, IconButton, CssBaseline, Drawer, List, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, AppBar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

export default function Admindash() {
  const [allUsers, setAllusers] = useState([]);
  const [showcompo, setShowCompo] = useState('all-users');
  const [post, setPost] = useState([]);
  const [postUsers, setPostUsers] = useState({});
  const navigate = useNavigate();

  React.useEffect(() => {
    fetchPostfun();
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "student"));
    const users = {};
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      console.log("===>Record", record);
      users[doc.id] = record.name;
    });
    console.log("users", users);
    setPostUsers(users);
    setAllusers(querySnapshot.docs.map(doc => ({ ...doc.data(), uid: doc.id }))); // Ensure allUsers state is set
  };

  const fetchPostfun = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "post"));
      const fetchPost = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost(fetchPost);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  const handleClick = (e) => {
    setShowCompo(e);
  };

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "post", postId));
      setPost(post.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const handelLogout = async () => {
    try {
      await signOut(auth);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "student", userId));
      const updatedUsers = allUsers.filter((user) => user.uid !== userId);
      setAllusers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const handleLike = async (postId) => {
    const specificPostRef = doc(db, "post", postId);
    const specificPostSnap = await getDoc(specificPostRef);
    const postData = specificPostSnap.data();
    const user = auth.currentUser;

    if (!postData.likes) {
      postData.likes = [];
    }

    const updatedLikes = [...postData.likes];

    if (updatedLikes.includes(user.uid)) {
      const index = updatedLikes.indexOf(user.uid);
      updatedLikes.splice(index, 1);
    } else {
      updatedLikes.push(user.uid);
    }

    await updateDoc(specificPostRef, { likes: updatedLikes });

    const updatedPosts = post.map((p) => {
      if (p.id === postId) {
        return { ...p, likes: updatedLikes };
      }
      return p;
    });

    setPost(updatedPosts);
  };

  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Admin Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box", border: '1px solid ' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Divider />
            <MenuItem onClick={() => handleClick('all-users')} sx={{ fontSize: "20px" }}> All Users</MenuItem>
            <Divider />
            <MenuItem onClick={() => handleClick('all-post')} sx={{ fontSize: "20px" }}> All Post </MenuItem>
            <Divider />
            <MenuItem onClick={() => handelLogout("adminid")} sx={{ fontSize: "20px" }}>Log Out</MenuItem>
            <Divider />
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {showcompo === 'all-users' && (
          <Box>
            <Typography variant="h4">All users</Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#3572EF' }}>
                    <TableCell>sr no.</TableCell>
                    <TableCell align="right">Logo</TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right" colSpan={2}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsers.length > 0
                    ? allUsers.map((user, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row"> {index + 1}</TableCell>
                        <TableCell align="right">
                          {user.profilepic
                            ? <img src={user.profilepic} alt="" width={50} height={50} />
                            : <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg" alt="" width={50} height={50} />
                          }
                        </TableCell>
                        <TableCell align="right">{user.name}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">
                          <Button onClick={() => navigate(`/edit/${user.uid}`)}>Edit</Button>
                          <Button onClick={() => deleteUser(user.uid)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    )) : "no user found"
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {showcompo === 'all-post' &&
          <Grid container spacing={2}>
            {post.map((singlePost, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ height: "100%", display: "flex", flexDirection: "column", }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {singlePost.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      posted by : {postUsers[singlePost.userid]}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {singlePost.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleDelete(singlePost.id)}>Delete</Button>
                  </CardActions>
                  <img src={singlePost.image} alt="post" style={{ width: "100%", height: 200, objectFit: "cover" }} />
                  <Box p={1}>
                    <Box>
                      <IconButton onClick={() => handleLike(singlePost.id)} >
                      {singlePost.likes &&
                              singlePost.likes.includes(
                                auth.currentUser.uid
                              )                          ? (<FavoriteIcon sx={{ height: "50px", color: "red" }} />)
                          : (<FavoriteBorderIcon sx={{ height: "50px" }} />)}
                      </IconButton>
                      <ChatIcon />
                      <SendIcon />
                    </Box>
                    {/* <Box></Box> */}
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        }
      </Box>
    </Box>
  );
}
