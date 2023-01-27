import { configureStore } from "@reduxjs/toolkit"
import alertReducer from "./alerts/reducers"
import pages from "./chapter/reducers"
import comicReducer from "./mangas/reducer"
import chapterReducer from "./chapter/reducers"
import chapterReducers from "./chapter/reducer"
import categoriesReducer from "./categories/categories.reducer";
import reducer from "./comics/comics.reducer";
import authReducer from "./auth/reducers"
import reducerAll from "./allcomic/reducer"
import reducerchap from "./allcomic/reducChapter"
const store = configureStore({

  reducer: {
    alertReducer,
    pages,
    comic : comicReducer,
    chapter :chapterReducer,
    chapters :chapterReducers,
    comics:reducer,
    categories:categoriesReducer,
    auth: authReducer,
    all : reducerAll,
    chap : reducerchap
  }
  
})

export default store