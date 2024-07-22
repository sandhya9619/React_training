// import { Box, Button, Container, Grid, Paper, TextField, Typography, useTheme, } from "@mui/material";
// import { grey, yellow } from "@mui/material/colors";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addExpeseData, salaryDecrement } from "../Feature/finance";
// import FinanceTable from "./FinanceTable";
// import { Add, Balance } from "@mui/icons-material";


// export default function Moneymanagement() {
//     const theme = useTheme();
//     const dispatch = useDispatch();
//     const state = useSelector((state) => state.preosnalExpesekey);
//     const [showTable, setshowTable] = useState(false);
//     const [totalSalary, setTotalSalary] = useState("");
//     let img = "finance.avif";

//     const [formData, setFormData] = useState({
//         expense_Name: "",
//         amount: "",
//     });
//     useEffect(() => {
//         document.body.style.background =
//             "url(finance.avif)no-repeat center center/cover";
//         //   document.body.style.backgroundRepeat = "no-repeat";
//         //   document.body.style.backgroundPosition = "center";
//         //   document.body.style.backgroundSize = "cover";
//     });

//     const handleFormData = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(addExpeseData(formData));
//         setFormData({
//             expense_Name: "",
//             amount: "",
//         });
//         setshowTable(true);
//     };

//     const handleBalance = () => {
//         if (totalSalary === "") {
//             alert("Please Fill Data");
//         } else {
//             dispatch(salaryDecrement(totalSalary));
//         }
//         setTotalSalary("");
//     };

//     return (
//         <Box>
//             <Container>
//                 <Box
//                     component={Paper}
//                     boxShadow={theme.shadows[5]}
//                     borderRadius={2}
//                     textAlign="center"
//                     p={3}
//                     width="fit-content"
//                     mx="auto"
//                 >
//                     <Typography variant="h4" mb={3} fontWeight="bold">
//                         Personal Finance Tracker
//                     </Typography>
//                     <form onSubmit={handleSubmit}>
//                         <Grid
//                             container
//                             spacing={3}
//                             justifyContent="center"
//                             alignItems="center"
//                         >
//                             <Grid item md={6}>
//                                 <TextField
//                                     required
//                                     size="small"
//                                     onChange={(e) => handleFormData(e)}
//                                     value={formData.expense_Name}
//                                     name="expense_Name"
//                                     label="Expense Name"
//                                     type="text"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item md={6}>
//                                 <TextField
//                                     required
//                                     size="small"
//                                     onChange={(e) => handleFormData(e)}
//                                     value={formData.amount}
//                                     name="amount"
//                                     label="Amount"
//                                     type="number"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item md={4}>
//                                 <Button
//                                     fullWidth
//                                     startIcon={<Add />}
//                                     type="submit"
//                                     variant="contained"
//                                 >
//                                     Add Expense
//                                 </Button>
//                             </Grid>
//                             <Grid item md={10}>
//                                 {showTable && <FinanceTable />}
//                             </Grid>
//                             <Grid item md={5}>
//                                 <TextField
//                                     size="small"
//                                     onChange={(e) => setTotalSalary(+e.target.value.trim())}
//                                     value={totalSalary}
//                                     name="total_salary"
//                                     label="Total Salary"
//                                     type="number"
//                                     fullWidth
//                                 />
//                             </Grid>
//                             <Grid item md={3}>
//                                 <Button
//                                     startIcon={<Balance />}
//                                     sx={{
//                                         bgcolor: yellow[700],
//                                         color: "black",
//                                         "&:hover": {
//                                             bgcolor: yellow[800],
//                                         },
//                                     }}
//                                     fullWidth
//                                     onClick={handleBalance}
//                                     type="button"
//                                     variant="contained"
//                                 >
//                                     Balance
//                                 </Button>
//                             </Grid>
//                             <Grid item md={12}>
//                                 <Typography variant="h6" fontWeight="600">
//                                     Remaining Balance:{" "}
//                                     <Typography variant="h6" component="span">
//                                         ₹ {state.Remaining_Balance}
//                                     </Typography>
//                                 </Typography>
//                             </Grid>
//                         </Grid>
//                     </form>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }