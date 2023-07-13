import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state, action)=>{
            state.items.splice(action.payload,1);// will need index of element to be removed
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
// not reducers => it combines all the reducers