import { createSlice } from "@reduxjs/toolkit";

const todoSlice= createSlice({
    name: 'todo',
    initialState:{
        items:[]
    },
    reducers:{
        addTodo:(state, action)=>{
            state.items.push(action.payload);
        },
    }
})

export const {addTodo} = todoSlice.actions;
export default todoSlice.reducer;
