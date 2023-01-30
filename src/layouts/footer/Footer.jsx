import React from 'react'
import './footer.css'
import Donation from '../../components/mercadoPago/MercadoPago';
import { useState } from 'react';

export default function Footer() {
const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div>
            <footer>
                <div className='img-seccion'>
                    <img src="../assets/Rectangle.png" alt="" />
                </div>
                <div className='suscribe-seccion'>
                    <div className='suscribe-text'><h1>Subscribe</h1></div>
                    <div className='input-secction'>
                        <input type="email" placeholder="Enter your email" />
                        <button>Suscribe Now</button>
                    </div>    
                </div>
                <div className='secction-pages'>
                    <div className='pagess'>
                        <h4>Home</h4>
                        <h4>Comics</h4>
                    </div>
                    <div >
                        <div className='redes'>
                            <img src="../assets/Facebook.png" alt="facebook" />
                            <img src="../assets/Twitter.png" alt="twitter" />
                            <img src="../assets/Vimeo.png" alt="Vimeo" />
                            <img src="../assets/Youtube.png" alt="Youtube" />
                        </div>
                        <div className='donate'>
                            <button className='donateBtn' onClick={openModal}>Donate   &hearts;</button>
                            <Donation isOpen={isModalOpen} onClose={closeModal} />
                        </div>
                    </div>

                </div>
                <div className='terms-section'>
                    <div className='p-text'>
                        <p className='p-text2'>Â© 2022 Minga. All Rights Reserved.</p>
                    </div>
                    <div className='logo-footer'>
                        <img className='img-logo' src="../assets/Logo-footer.png" alt="logo" />
                        <img  src="../assets/Frame_8.png" alt="" />
                    </div>
                    <div className='p-text'>
                        <p className='p-text2'>Terms and Conditions</p>
                        <p className='p-text2'>Privacy policy</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}