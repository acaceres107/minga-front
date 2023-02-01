import React from "react";
import Nav from '../../layouts/nav/Nav'
import './successpayment.css'
/* import Footer from "../../layouts/footer/Footer"; */


 const SuccessPayment = () => {
  return (
    <div className="successmain">
        <Nav/>
        <div className="success-main">
          <div className="success">
              <img className="naruto" src="https://i.pinimg.com/originals/6d/cf/3a/6dcf3a15e0b17ea5742892e4ae220b4a.gif" alt="gif ty" />
              <h2 className="naruto-text">Thank you so much for your support! </h2>
              <a className="naruto-anchor" href="/">Home</a>
          </div>
        </div>
{/*         <Footer/> */}
    </div>
  )
}
export default SuccessPayment
