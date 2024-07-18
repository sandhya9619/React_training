import { createSlice } from "@reduxjs/toolkit";

const financeManagement = createSlice({
   name: "management",
   initialState: { balance: [] },
   reducers: {
      addFinanceManagement: (state, action) => {
         state.balance.push(action.payload);
      },

   }
})
export default financeManagement.reducer;
export const { addFinanceManagement } = financeManagement.actions;

