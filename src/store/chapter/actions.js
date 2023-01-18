import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
    try {
        const response = await axios.post(
            "http://localhost:8000/api/chapters",
            chapter,
        )
        return {
            response: { chapter: response.data },
            message: "Chapter created successfully",
        }
    } catch (error) {
        return {
            response: { chapter: error.response.data },
            message: "Error creating chapter",
        }
    }
})

const getChapterDetails = createAsyncThunk("getChapter", async (_id) => {
    try {
        const response = await axios.get(
            `http://localhost:8000/api/chapters/pages/${_id}`
        )
        console.log(response.data.response);
        return {
            response: {chapter: response.data.response},
            message: "Chapter successfully obtained!"
        }
    } catch (error) {
        return {
            response: {chapter: error.response.data},
            message: "Error: Chapter cannot be obtained."
        }
    }
})

const getChapters = createAsyncThunk(
    "getChapters",
    async (comic) => {
        try {
            const response= await axios.get(`http://localhost:8000/api/chapters/order?comic_id=${comic}`)
            console.log(response)
        return {
            
            response: {chapters: response.data},
            message: "Chapters obtained"
        }
        } catch (error) {
            return {
                response: {chapters: error.response.data},
                message: "Error obtained chapters"
            }
        }
    }
)

const  obtenerChapters = createAsyncThunk(
    "obtenerchapters",
    async ({id, pages}) => {
        try {
            let response = await axios.get(`http://localhost:8000/api/chapters?comic_id=${id}&page=${pages}`)
            return {
                response : { chapter : response.data },
                message  : "chapter obtain"
            }
        } catch (error) {
            console.log(error)
            return {
                response : { chapter : error.response.data },
                message  : "error chapter obtain"
            }            
        }
    }
)


const chapterActions = {
    newChapter,
    getChapterDetails,
    getChapters,
    obtenerChapters
}

export default chapterActions