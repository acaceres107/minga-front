import { createReducer } from "@reduxjs/toolkit";
import actionAllComic from "./actions";

let { allComics } = actionAllComic;

let initialState = {
  comic: [],
  message: "",
};

let reducerAll = createReducer(initialState, (builder) => {
  builder.addCase(allComics.fulfilled, (state, action) => {
    let newState = {
      comic: action.payload?.res.comic,
      message: action.payload.message,
    };
    return newState;
  });
});

export default reducerAll;
