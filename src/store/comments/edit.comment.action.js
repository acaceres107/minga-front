import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";

let editComment=createAsyncThunk(
    "editComment",
    async ({id,comment})=>{
        let token = localStorage.getItem("token")
        try{
            let url=`${urlApi}api/comments?id=${id}`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            let res= await axios.put(url,comment,headers);
            return{
                response:res.data
            }
        }
        catch(err){
            console.log(err);
        };
    }
);

let actionEdit={editComment};
export default actionEdit;