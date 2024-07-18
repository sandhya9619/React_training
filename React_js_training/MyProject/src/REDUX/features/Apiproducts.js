import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchdata= createAsyncThunk("fetchProductData",()=>{
    const record = axios({
        method :"get",
        url : ""
    }).then((res)=>{
        return res.json();
    })
})
const ProductReducer=createSlice({
    name :"Product",
    initialState : {product :[],pending : false,error : ""},
    reducers : {},
    extraReducers : (builder=>{
        builder.addCase(fetchdata.fulfilled,(state,action)=>{
            state.product = action.payload.product;
        }).addCase(fetchdata.pending,(state,action)=>{
            state.pending=true;
        }).addCase(fetchdata.rejected,(state,action)=>{
            state.error = action.payload.error
        })
    })
});

export default ProductReducer.reducer;
