import { configureStore } from "@reduxjs/toolkit";
import Counter from "../features/Counter";
import Score from "../features/Score"; 
import Todo from "../features/Todo";
import Apiproducts from "../features/Apiproducts";

export const Store = configureStore({
    reducer:{
        counterkey : Counter,
        scorekey : Score,
        todokey : Todo,
        Apiproductkey : Apiproducts,

        // moneymanager
        budgetkey: Budget,
        expensekey: AddExpense,
    }
})