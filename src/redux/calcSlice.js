import { createSlice } from "@reduxjs/toolkit";

export const calcSlice = createSlice({
name:'calculator',
initialState:{value:"example"},
reducers:{
    showValue:(state,action)=>{
        state.value=action.payload
        console.log(state);
    }
},
}); 

export const {showValue}=calcSlice.actions;
export default calcSlice.reducer;