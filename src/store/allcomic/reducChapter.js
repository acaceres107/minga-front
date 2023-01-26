import { createReducer } from "@reduxjs/toolkit";
import actionChapter from "./actionchapter";

const { chapterComic } = actionChapter;

let initialState = {
  message: "",
};

let reducerchap = createReducer(initialState, (builder) => {
  builder.addCase(chapterComic.fulfilled, (state, action) => {
    let newState = {
      idComic: action.payload,
    };
    return newState;
  });
});

export default reducerchap;
