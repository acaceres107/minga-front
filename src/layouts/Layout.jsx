import Footer from './footer/Footer'
import React from 'react' 
import { Outlet } from 'react-router-dom'
import NavVar from './nav/NavVar'


export default function Layouts() {
    return (
        <div>
            <NavVar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}