import { createReducer } from "@reduxjs/toolkit";
import chapterAction from './actions'

const { obtenerChapters } = chapterAction

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
    }
)

export default chapterReducer