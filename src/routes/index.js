import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layouts from "../layouts/Layout";
import Header from "../components/home/Home";
import Newchapter from "../components/chapters/Newchapters";
import Pages from "../routes/pages/Pages";
import Comic from "./mangas/comics/Comic";
import Home from "../components/home/Home";
import ComicsList from "../components/comics-list/Comics-list";
import ListComment from "../components/ListComment/ListComment";
import Mycomics from "../components/mycomics/Mycomics"
import SignUp from "./Login/SignUp"
import SignIn from "./Login/SignIn"
import Modal from "../components/mycomics/Modal";
import ChapterEdit from "../components/editions/ChapterEdit";
import Welcome from "../components/welcome/Welcome";


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
        path:'/comics/me',
        element:<Mycomics/>
    },{
        path:'/edit-comics/:id',
        element:<Modal/>
    },
    {
        path:'/comics',
        element:<ComicsList/>
    },{
        path:"/signin",
        element:<SignIn/>
    },{
        path:"/signup",
        element:<SignUp/>
    }]
},{
    path:"/comments/:id",
    element:<ListComment/>
},{
    path:'/pages/:id',
    element: <Pages/>,
},{
    path:"/home",
    element: <Home/>, 
},{
    path:"/edit-chapters",
    element: <ChapterEdit/>, 
},{
    path:"/verify/:verify_Code",
    element: <Welcome/> , 
}])

export default router