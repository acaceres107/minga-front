import { createReducer } from "@reduxjs/toolkit";
import myComicsAction from "../mycomics/mycomics.actions.js";
 

const { getMycomics,updateMyCard } = myComicsAction
const initialState = { myComics: [] ,  message: ""};

const myComicReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(getMycomics.fulfilled, (state, action) => {
        console.log(action.payload);
        let newState = {
            myComics: action.payload?.response?.comics?.response,
            message: action.payload?.message            
        }
        return newState
    })
    .addCase(getMycomics.rejected, (state, action) => {
        let newState =  {
            message: "ERROR"
        }
        return newState
    })
    .addCase(updateMyCard.fulfilled, (state, action) => {
        let newState = {
            myComics: action.payload?.response,
        
        }
        return newState
    })
})

export default myComicReducer