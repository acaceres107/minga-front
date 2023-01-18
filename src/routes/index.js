import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layout";
import Header from "../components/home/Home";
import Newchapter from "../components/chapters/Newchapters";
import Pages from "../routes/pages/Pages";
import Comic from "./mangas/comics/Comic";
import ComicsList from "../components/comics-list/Comics-list";

export const router = createBrowserRouter([{

    path: "/",
    element: 
        <Layouts/>,
    children:[{
        path:'/',
        element: <Header/>,
    },{
        path:'/new-chapters',
        element: <Newchapter/>,
    },{
        path:"/comic/:id",
        element: <Comic/>, 
    },{
        path:'/comics',
        element:<ComicsList/>
    },]
},{
    path:'/pages/:id',
    element: <Pages/>,
}])

export default router