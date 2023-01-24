import { configureStore } from "@reduxjs/toolkit"
import alertReducer from "./alerts/reducers"
import pages from "./chapter/reducers"
import comicReducer from "./mangas/reducer"
import chapterReducer from "./chapter/reducer"
import categoriesReducer from "./categories/categories.reducer";
import reducer from "./comics/comics.reducer";
import authReducer from "./auth/reducers"
import myComicReducer from "./mycomics/mycomics.reducer"
const store = configureStore({

  reducer: {
    alertReducer,
    pages,
    comic : comicReducer,
    chapter :chapterReducer,
    comics:reducer,
    categories:categoriesReducer,
    auth: authReducer,
    Mycomics: myComicReducer
  }

})

export default store