import React, {useState} from "react"
import { Link as Anchor } from "react-router-dom"
import "./navbar.css"
import { useDispatch,useSelector } from 'react-redux'
import authActions from '../../store/auth/actions'
const { cerrar_sesion } = authActions

const Navbar = () => {
    let { token,is_online } = useSelector(store => store.auth)
    let dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => setIsOpen(!isOpen)
    const signout = async(event)  => await dispatch(cerrar_sesion(token))
    let userStore=useSelector((store)=>store.auth);
    
    return(
        <div className="navbar">
            <div className= {`nav_items ${isOpen && "open"}`}>
                <div className="links">
                    {
                        userStore.is_author||userStore.is_company?(
                            <>
                                <Anchor className="each-link" to={"/"}> HOME</Anchor>
                                <Anchor className="each-link" to={"/comics"}> COMICS</Anchor>
                                <Anchor className="each-link" to={"/new-comic"}> NEW COMIC</Anchor>
                                <Anchor className="each-link" to={"/edit-chapters"}>EDIT CHAPTER</Anchor>
                                <Anchor className="each-link" to={"/comics/me"}>MY COMICS</Anchor>
                                <Anchor className="each-link" to={"/"}> PROFILE</Anchor>
                            </>
                        ):(
                            <>
                                <Anchor className="each-link" to={"/"}> HOME</Anchor>
                                <Anchor className="each-link" to={"/comics"}> COMICS</Anchor>
                            </>
                        )    
                    }
                    {is_online ? (
                        <span className="each-link" onClick={signout}>SIGN OUT</span>
                    ) : (
                        <>
                            <Anchor className="each-link" to={"/signup"}> SIGN UP</Anchor>
                            <Anchor className="each-link" to={"/signin"}> SIGN IN</Anchor>
                        </>
                    )}
                </div>
                <div className={`cerrar ${isOpen && "close"}`} onClick={handleMenu}>
                    <img className="equis" src="../assets/cerrar.png" alt="" />
                </div>
            </div>
            <div className={`nav_toggle ${isOpen && "open"}`} onClick={handleMenu} >
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