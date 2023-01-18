import {createReducer} from "@reduxjs/toolkit";
import categoriesActions from "./categories.action";
const { filterCategoryComics } = categoriesActions;

const initialState = {
    filterCategory: [],
};

const categoriesReducer = createReducer(
    initialState,
    (builder) => {
        builder 
            .addCase(filterCategoryComics, (state, action) => {
                if(state.filterCategory.includes(action.payload)){
                    const newState = {
                        filterCategory: state.filterCategory.filter((id)=>id !== action.payload), 
                    };
                    return newState;
                }else{
                    state.filterCategory.push(action.payload)
                };
            }
        );
    }
);
export default categoriesReducer;