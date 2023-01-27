import React from 'react'
import { useSelector } from 'react-redux'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Alerta () {
    let view = useSelector(store => store.alertReducer.view)
    let messages = useSelector(store => store.alertReducer.messages)
    console.log(view)
    console.log(messages);
    if (view){
        toast(typeof messages === "string"? messages : messages = messages?.map(message => message.message).join(),
      {
        className: "tostada",
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        

        })
    }
  return (
    <div>
        <ToastContainer />
    </div>
  )
}