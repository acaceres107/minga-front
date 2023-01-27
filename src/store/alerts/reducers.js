import { createReducer } from "@reduxjs/toolkit";
import alertActions from "./actions";
const {mingaAlert} = alertActions
const inicialState = {
    view: false,
    messages: ""
}
const alertReducer = createReducer(
    inicialState,
    (builder)=>{
        builder.addCase(
            mingaAlert,
            (state, action)=>{
                let newState = {
                    view: true,
                    messages: action.payload
                }
                return newState
            }
        )
    }
)

export default alertReducer