import { createReducer } from "@reduxjs/toolkit";
import actionComment from "./comments.action";
import actionDelete from "./delete.comments.action";
let {getComments}=actionComment;


let initialState={
    comment:[]
}

let commentsReducer=createReducer(
    initialState,
    (builder)=>{
        builder.addCase(
            getComments.fulfilled,
            (state,action)=>{
                let newState={
                    comment: action?.payload?.response?.data?.response,
                };
                return newState;
            }
        );
    },
);
export default commentsReducer;