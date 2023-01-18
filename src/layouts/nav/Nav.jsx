import React, {useState} from "react";
import { Link as Anchor } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className= {`nav_items ${isOpen && "open"}`}>
                <div className="links">
                    <Anchor to={"/"}> HOME</Anchor>
                    <Anchor to={"/comic"}> COMICS</Anchor>
                    <Anchor to={"/new-chapters"}> NEW CHAPTER</Anchor>
                    <a href="#"> AUTHOR</a>
                </div>
                <div className={`cerrar ${isOpen && "close"}`} onClick={ () => setIsOpen(!isOpen)}>
                    <img className="equis" src="../assets/cerrar.png" alt="" />
                </div>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
                <div imgMobile>
                    <img className="img-nav" src="../assets/menu.png" alt="" />
                </div>
            </div>
            <div className="nav_logo">
                <img className="img-nav" src="../assets/Logom.jpg" alt="" />
            </div>
        </div>
  )
}

export default Navbar