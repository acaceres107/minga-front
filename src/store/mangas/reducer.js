import { createReducer } from "@reduxjs/toolkit";
import comicsActions from './actions'

const { obtenerComics} = comicsActions


const initialState = {
    comic : [],
    message : ""
}

const comicReducer = createReducer( 
    initialState, 
    (builder)=>{ builder
    .addCase(
        obtenerComics.fulfilled,
        (state,action) => {
            let newState = {
                comic : action.payload.response.comics,
                message : action.payload.message
            }
            return newState
        }
    )
    }
)
    
export default comicReducer