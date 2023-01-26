import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";

let deleteComment=createAsyncThunk(
    "deleteComments",
    async (id)=>{
        let token = localStorage.getItem("token")
        try{
            let url=`${urlApi}api/comments?id=${id}`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            let res= await axios.delete(url,headers);
            return{
                response:res.data.message
            }
        }
        catch(err){
            console.log(err);
        };
    }
);

let actionDelete={deleteComment};
export default actionDelete;