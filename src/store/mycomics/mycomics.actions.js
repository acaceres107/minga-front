import { createAsyncThunk, AsyncThunk  } from "@reduxjs/toolkit";
import axios from "axios";
import urlApi from "../../url";

let getMycomics = createAsyncThunk(
    "getMycomics",
    async({token})=>{
        try{
            
            let url = `http://localhost:8000/api/comics/me/`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.get(url, headers)

/*             console.log(response);
            console.log(response.data) */
            return{
                    response: {comics:  response.data,
                    } 
                }
        }catch (error){
            console.log(error);
        }
    }
)

let deleteMyCard = createAsyncThunk(
    "deleteMyCard",
    async(id)=>{
        let token = localStorage.getItem("token")
        try{
            let url = `http://localhost:8000/api/comics/${id}`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.delete(url, headers)
            console.log(response);

        }catch(error){
            console.log(error);

        }
    }
)
let updateMyCard = createAsyncThunk(
    "updateMyCard",
    async({id, comic})=>{
        let token = localStorage.getItem("token")
        try{
            let url = `http://localhost:8000/api/comics/${id}`
            let headers = {headers: {'Authorization': `Bearer ${token}`}}
            const response = await axios.put(url, comic, headers)
            return{response: response.status, succes: true}

        }catch(error){
            console.log(error);

        }
    }
)


const myComicsAction = {
    getMycomics, deleteMyCard, updateMyCard
}
export default myComicsAction;