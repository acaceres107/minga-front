import Footer from './footer/Footer'
import React from 'react' 
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav'


export default function Layouts() {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    )
}