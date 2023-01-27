import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import urlApi from "../../url";


const handleToken = () => {
  const BEARER_TOKEN = localStorage.getItem("token")

  let config = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${BEARER_TOKEN}`,
      },
  }
  return config
}

const newChapter = createAsyncThunk("newChapter", async (chapter) => {
  try {
    const response = await axios.post(`${urlApi}api/chapters`, chapter);
    return {
      response: { chapter: response.data },
      message: "Chapter created successfully",
    };
  } catch (error) {
    return {
      response: { chapter: error.response.data },
      message: "Error creating chapter",
    };
  }
});

const getChapterDetails = createAsyncThunk("getChapter", async (_id) => {
  try {
    const response = await axios.get(`${urlApi}/chapters/pages/${_id}`);
    console.log(response.data.response);
    return {
      response: { chapter: response.data.response },
      message: "Chapter successfully obtained!",
    };
  } catch (error) {
    return {
      response: { chapter: error.response.data },
      message: "Error: Chapter cannot be obtained.",
    };
  }
});

const getChapters = createAsyncThunk("getChapters", async (comic) => {
  try {
    const response = await axios.get(
      `${urlApi}api/chapters/order?comic_id=${comic}`
    );
    console.log(response);
    return {
      response: { chapters: response.data },
      message: "Chapters obtained",
    };
  } catch (error) {
    return {
      response: { chapters: error.response.data },
      message: "Error obtained chapters",
    };
  }
});

const obtenerChapters = createAsyncThunk(
  "obtenerchapters",
  async ({ id, pages }) => {
    try {
      let response = await axios.get(
        `${urlApi}api/chapters?comic_id=${id}&page=${pages}`
      );
      return {
        response: { chapter: response.data },
        message: "chapter obtain",
      };
    } catch (error) {
      console.log(error);
      return {
        response: { chapter: error.response.data },
        message: "error  2 chapter obtain",
      };
    }
  }
);

const updateChapter = createAsyncThunk("editChapters", async ({id, chapter}) => {
  try {
    let token = localStorage.getItem("token")
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    const res = await axios.put(`${urlApi}api/chapters/${id}` ,chapter, headers)
    return (res)
  } catch (error) {
    
  }
     
})

const deleteChapter = createAsyncThunk("deleteChapters", async (id) => {

try {
  let token = localStorage.getItem("token")
  let headers = {headers: {'Authorization': `Bearer ${token}`}}
  const res = await axios.delete(`${urlApi}api/chapters/${id}` , headers)
  return {
    response: { chapters: res.data },
    message: "Chapters delete",
  };
} catch (error) {
  
}
})

const chapterActions = {
  newChapter,
  getChapterDetails,
  getChapters,
  obtenerChapters,
  deleteChapter,
  updateChapter
};

export default chapterActions;
