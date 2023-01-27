import { createReducer } from "@reduxjs/toolkit";
import chapterAction from './actions'

const { obtenerChapters , updateChapter , deleteChapter } = chapterAction

const initialState = {
    chapter : [],
    message : ""
}

const chapterReducer = createReducer(
    initialState,
    (builder) =>{builder
        .addCase(
            obtenerChapters.fulfilled ,
            (state,action)=>{
                let newState = {
                    chapter : action.payload.response.chapter ,
                    message : action.payload.message
                }
                return newState
            }
        )
        .addCase(
            updateChapter.fulfilled ,
            (state,action)=>{
                let newState = {
                    chapter : action.payload,
                    message : "update chapter"
                }
                return newState
            }
        )
        .addCase(
            deleteChapter.fulfilled ,
            (state,action)=>{
                let newState = {
                    chapter : action.payload.response,
                    message : " chapter delete"
                }
                return newState
            }
        )
    }
    
)

export default chapterReducer