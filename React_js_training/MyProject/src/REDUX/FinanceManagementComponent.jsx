// import { Box, Button, TextField, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const rows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];


// export default function FinanceManagementComponent() {
//   const [income, setincome] = useState();
//   const [expenses, setexpenses] = useState();


//   let data = useSelector((state) => {
//     console.log("------>",state);
//     return state.financemanagementkey.balance
//     // return state.financemanagementkey.management
//   })

//   useEffect(() => {
//     document.body.style.background = "url(backimg03.jpg)"
//   })
//   let dispatch = useDispatch();
//   return (
//     <Box>
//       <Box>
//         <TextField id="outlined-basic" label="Enter Your sallery" variant="outlined" />
//         <Button variant="outlined">Buy now</Button>
//         <Typography>your sallery is : {data}</Typography>


//       </Box >
//       <Box sx={{ margin: "80px" }}>
//         <Box>
//           <TextField id="outlined-basic" label="purchase Item" variant="outlined" />
//           <TextField id="outlined-basic" label="price" variant="outlined" />
//           <Button variant="outlined">Show</Button>

//           {/* <TextField id="outlined-basic" label="" variant="outlined" /> */}

//         </Box>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Buy Item</TableCell>
//                 <TableCell align="right">Price</TableCell>
//                 <TableCell align="right">Budget</TableCell>

//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow
//                   key={row.name}
//                   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>

//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>

//       </Box>
//     </Box>
//   )
// }
