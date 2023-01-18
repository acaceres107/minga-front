import React, {useState} from "react";
import "./navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="navbar">
            <div className= {`nav_items ${isOpen && "open"}`}>
                <div className="links">
                    <a href="../components/home/Home.jsx"> HOME</a>
                    <a href="#"> COMICS</a>
                    <a href="#"> NEW CHAPTER</a>
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