import { createReducer } from "@reduxjs/toolkit";
import actionDelete from "./delete.comments.action";
let {deleteComment}=actionDelete

let initialState={
    response:[]
}

let deleteCommnets=createReducer(
    initialState,
    
    (builder)=>{
        builder.addCase(
            deleteComment.fulfilled,
            (state,action)=>{
                let newState={
                    response: action?.payload?.response,
                    message:action?.payload?.response
                };
                return newState;
            }
        );
    },
);
export default deleteCommnets;