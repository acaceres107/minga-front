import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";

let getComments = createAsyncThunk(
    "getComments",
    async({chapter_id,page})=>{
        try{
            let res= await axios.get(`${urlApi}api/comments?commentable_type=${chapter_id}&page=${page}`);
            return {
                response:res,
            };
        }
        catch(err){
            console.log(err);
        };
    }
);

let actionComment={getComments};
export default actionComment;
