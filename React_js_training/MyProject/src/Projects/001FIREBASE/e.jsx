// Adminprofile.jsx

import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Toolbar,
  Typography,
  Divider,
  MenuItem,
  Grid,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableBody,
  styled,
  TableCell,
  Table,
  tableCellClasses,
  IconButton,
  TextField,
} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { useNavigate } from "react-router-dom";
import {
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { Delete, Edit } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { auth, db } from "../../../firebaseConfig";
import { async } from "@firebase/util";

const drawerWidth = 240;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [&.${tableCellClasses.head}]: {
    fontSize: 20,
  },
  [&.${tableCellClasses.body}]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#e3f2fd",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Adminprofile() {
  const [allUsers, setAllusers] = React.useState([]);
  const [showcompo, setShowCompo] = useState(true);
  const [post, setPost] = React.useState([]);
  const [postUsers, setPostUsers] = React.useState({});
  const navigate = useNavigate();
  const [newComment, setNewcomment] = useState("");
  const [isInputOpen, setInputOpen] = useState(null);

  React.useEffect(() => {
    fetchPostfun();
    fetchUsers();
    fetchAllUsers();
  }, []);

  useEffect(() => {
    document.body.style.background =
      "url(i4.jpg) no-repeat center center/cover";
  }, []);

  const fetchAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Stdent"));
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ uid: doc.id, ...doc.data() });
    });
    setAllusers(users);
  };

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "Stdent"));
    const users = {};
    querySnapshot.forEach((doc) => {
      const record = doc.data();
      users[doc.id] = record.name;
    });
    setPostUsers(users);
  };

  const fetchPostfun = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Post"));
      const fetchPost = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost(fetchPost);
    } catch (error) {
      console.error("Error fetching posts: ", error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deleteDoc(doc(db, "Post", postId));
      setPost(post.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const handelLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin", { replace: true });
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "Stdent", userId));
      const updatedUsers = allUsers.filter((user) => user.uid !== userId);
      setAllusers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  const handleLike = async (postId) => {
    const specificPostRef = doc(db, "Post", postId);
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
  const handleComment = async (postid) => {
    const user = auth.currentUser;
    console.log("........", postid);

    const newCommentObj = {
      text: newComment,
      userid: user.uid,
      timestamp: Date.now(),
    };

    await updateDoc(doc(db, "Post", postid), {
      comments: arrayUnion(newCommentObj),
    });
    setNewcomment("");
    const updateCommentPost = await post.map((post) =>
      post.id === postid
        ? { ...post, comments: [...post.comments, newCommentObj] }
        : post
    );
    setPost(updateCommentPost);
    console.log("--------->", post);
    setInputOpen(null)
  };

  const handleIconButtonClick = (index) => {
    setInputOpen(index === isInputOpen ? null : index);
    console.log(isInputOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ bgcolor: "#fce4ec" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              width: "100%",
              textAlign: "center",
              alignContent: "center",
              fontSize: "30px",
            }}
          >
            Admin Profile
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        variant="permanent"
        sx={{
          height: "100vh",
          overflow: "auto",
          bgcolor: "#e3f2fd",
          width: drawerWidth,
          flexShrink: 0,
          [& .MuiDrawer-paper]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <Divider />
            <MenuItem
              onClick={() => setShowCompo(true)}
              sx={{ fontSize: "20px" }}
            >
              All Users
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => setShowCompo(false)}
              sx={{ fontSize: "20px" }}
            >
              All Post
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handelLogout("adminid")}
              sx={{ fontSize: "20px" }}
            >
              Log Out
            </MenuItem>
            <Divider />
          </List>
          <Divider />
        </Box>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {!showcompo ? (
          <Grid container spacing={2}>
            {post.map((singlePost, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {singlePost.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      posted by : {postUsers[singlePost.userid]}
                    </Typography>
                    <img
                      src={singlePost.image}
                      alt="Post"
                      style={{ width: "100%", height: 200, objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <IconButton
                              onClick={() => handleLike(singlePost.id)}
                            >
                              {singlePost.likes &&
                              singlePost.likes.includes(
                                auth.currentUser.uid
                              ) ? (
                                <FavoriteIcon
                                  sx={{ height: "50px", color: "red" }}
                                />
                              ) : (
                                <FavoriteBorderIcon sx={{ height: "50px" }} />
                              )}
                            </IconButton>
                            <IconButton
                              onClick={() => handleIconButtonClick(index)}
                            >
                              <ChatBubbleOutlineIcon sx={{ height: "50px" }} />
                            </IconButton>
                            <IconButton>
                              <ShareIcon sx={{ height: "50px" }} />
                            </IconButton>
                          </Box>
                        </Box>

                        {/* Spacing */}
                        <Box mb={2} width="100%">
                          <Grid container spacing={2} alignItems="center">
                            {/* Input field */}
                            <Grid item xs={isInputOpen === index ? 9 : 12}>
                              {isInputOpen===index && (
                                <TextField
                                  value={newComment}
                                  onChange={(e) =>
                                    setNewcomment(e.target.value)
                                  }
                                  sx={{ textAlign: "center", width: "100%" }}
                                  variant="outlined"
                                  fullWidth
                                  InputProps={{
                                    style: {
                                      borderRadius: "20px",
                                    },
                                    placeholder: "Write a comment",
                                  }}
                                />
                              )}
                            </Grid>
                            {/* Post button */}
                            <Grid item xs={isInputOpen === index ? 3 : 0}>
                              {isInputOpen === index && (
                                <Button
                                  variant="outlined"
                                  size="large"
                                  onClick={() => handleComment(singlePost.id)}
                                  fullWidth
                                  sx={{
                                    backgroundColor: "#fce4ec",
                                    marginLeft: "20px",
                                    color: "gray",
                                    border: "none",
                                    height: "50px",
                                    width: "90px",
                                  }}
                                >
                                  Post
                                </Button>
                              )}
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>

                      <Box>
                        <IconButton sx={{ margin: "10px" }}>
                          <ExpandMoreIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography>
                      {singlePost.likes?.length || 0} Like
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                      {singlePost.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleDelete(singlePost.id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box>
            <h1 style={{ textAlign: "center" }}>All Users</h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead sx={{ background: "#fce4ec", textAlign: "center" }}>
                  <TableRow>
                    <StyledTableCell align="center">Sr No</StyledTableCell>
                    <StyledTableCell align="center">Logo</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center" colSpan={2}>
                      {" "}
                      Action
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allUsers
                    ? allUsers.map((user, index) => {
                        return (
                          <StyledTableRow key={index}>
                            <StyledTableCell align="center">
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.profilepic ? (
                                <img
                                  src={user.profilepic}
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                              ) : (
                                <img
                                  src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"
                                  alt=""
                                  width={50}
                                  height={50}
                                />
                              )}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {user.email}
                            </StyledTableCell>

                            <StyledTableCell align="center">
                              <Button
                                sx={{
                                  margin: "10px",
                                  bgcolor: "#e3f2fd",
                                  color: "black",
                                  border: "none",
                                }}
                                variant="outlined"
                                size="medium"
                                startIcon={<Edit />}
                                onClick={() => navigate(/edit/${user.uid})}
                              >
                                Edit
                              </Button>
                              <Button
                                sx={{
                                  margin: "10px",
                                  bgcolor: "#e3f2fd",
                                  color: "black",
                                  border: "none",
                                }}
                                variant="outlined"
                                size="medium"
                                onClick={() => deleteUser(user.uid)}
                                endIcon={<Delete />}
                              >
                                Delete
                              </Button>
                            </StyledTableCell>
                          </StyledTableRow>
                        );
                      })
                    : "no user found"}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
}