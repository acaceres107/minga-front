import Footer from './footer/Footer'
import React from 'react' 
import Nav from './nav/Nav'
import Alerta from '../components/alerta/Alerta'
import { Outlet } from 'react-router-dom'


export default function Layouts() {
    return (
        <div>
           <Nav/>  
           <Alerta></Alerta>
            <Outlet/>
            <Footer/>
        </div>
    )
}