import { createSlice } from "@reduxjs/toolkit";
const Parser = require('expr-eval').Parser;

export const calcSlice = createSlice({
name:'calculator',
initialState:{
    value:0,
    newExpre:"",
    viewNum:"",
    showDisplay:"0"
},
reducers:{
    reset:(state)=>{
        state.value=0;
        state.newExpre="";
        state.viewNum=""
        state.showDisplay="0"
    },
    showExpre:(state,action)=>{
        state.value=Parser.evaluate(state.viewNum)
        state.showDisplay=state.value
        state.newExpre=state.value
        state.viewNum="";
        
    },
    addExpre:(state, action)=>{
        
       
        state.newExpre+=action.payload
        
        
       
            
        
    },
    changeViewNum:(state,action)=>{
        let regex=/^0|\+|\-|\/|\*/;
        let reg1=/\./

        
        
        if(regex.test(state.showDisplay)){
            state.showDisplay=state.showDisplay.slice(1)
        }
       
        if((reg1.test(state.showDisplay) && reg1.test(action.payload)) ){
            state.showDisplay=state.showDisplay
        } else{state.showDisplay+=action.payload}

      
        
        
    },
    resetViewNum:(state,action)=>{
        let x=state.viewNum.length;
        let refinal=/\+|\-|\/|\*/
        let reg2=/(?<=(\+|\-|\/|\*))\+|\-|\/|\*/
      
        state.viewNum+=state.showDisplay;
        state.showDisplay=action.payload
        
    }
},
}); 

export const {reset, showExpre, addExpre, changeViewNum,resetViewNum}=calcSlice.actions;
export default calcSlice.reducer;