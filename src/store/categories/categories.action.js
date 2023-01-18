import { createAction } from "@reduxjs/toolkit";

const filterCategoryComics = createAction(
    'categories',
    (data) => {
        return {
            payload: data
        }
    }
)
const categoriesActions = { filterCategoryComics};
export default categoriesActions;