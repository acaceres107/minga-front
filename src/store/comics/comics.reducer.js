import { createReducer } from "@reduxjs/toolkit";
import actionComic from "./comics.action";

let {getComics}=actionComic;

let initialState={
    comic:[],
    message:''
};

let reducer=createReducer(
    initialState,
    (builder)=>{
        builder.addCase(
            getComics.fulfilled,
            (state,action)=>{
                let newState={
                    comic: action.payload.res.comic,
                    message:action.payload.message
                };
                return newState
            }
        )
    }
)
export default reducer