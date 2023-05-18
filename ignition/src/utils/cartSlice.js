import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items=[];
        },
        removeLast:(state)=>{
            state.items.pop()
        }
    }
});

export const {addItem,clearCart,removeLast} = cartSlice.actions;

export default cartSlice.reducer;