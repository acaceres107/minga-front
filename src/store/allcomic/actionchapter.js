import { createAsyncThunk  } from "@reduxjs/toolkit";


    const chapterComic = createAsyncThunk( 
        "chapterComic",
        async (data) => {
            return {payload: data} 
        }
    )
    const reloadChapter = createAsyncThunk( 
        "reloadChapter",
        async (data) => {
            return {payload: data} 
        }
    )  


let actionChapter={chapterComic , reloadChapter}

export default actionChapter