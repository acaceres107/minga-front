import React, {useRef} from 'react'
import axios from 'axios'
import './NewAuthor.css'
import { useSelector } from 'react-redux'
import swal from 'sweetalert'


function NewAuthor() {
    const inputName = useRef("");
    const inputLastName = useRef("");
    const inputCityCountry = useRef("");
    const inputDate = useRef("");
    const inputUrl = useRef("");
    let userStore=useSelector((store)=>store.auth);

    let guardarData = (e) => {
        e.preventDefault()
        let data = {
            name: inputName.current.value,
            last_name: inputLastName.current.value,
            city: inputCityCountry.current.value,
            country: inputCityCountry.current.value,
            date: inputDate.current.value,
            photo: inputUrl.current.value,
            user_id: userStore.id,
        }
         axios.post("http://localhost:8000/api/authors/",data)
         .then(e=>{console.log(e) })
         .catch(error=>console.log(error))
         
    }

    const alerta = () => {
        swal(
           'Good job Author!',
            'See You',
            'success'
         )
 }
  
    return (
        <div className='container'>
            <form className='formP' action="" onSubmit={guardarData}>
                <div className="form1">
                    <h1 className='titulo1'>New Author</h1>
                    <img className='img1' src='assets/Rectanglea.jpg' alt='img'/>
                    <div className="grupo">
                        <input className='input1' type="text" name="" id="" placeholder="Name" ref={inputName}/>
                    </div>
                    <div className="grupo">
                        <input className='input1' type="text" name="" id="" placeholder="Last Name" ref={inputLastName}/>
                    </div>
                    <div className="grupo">
                        <input className='input1' type="text" name="" id="" placeholder='City & Country' ref={inputCityCountry}/>
                    </div>
                    <div className="grupo">
                        <input className='input1' type="date" name="" id="" placeholder='Date' ref={inputDate}/>
                    </div>
                    <div className="grupo">
                        <input className='input1' type="text" name="" id="" placeholder="URL Profile Image" ref={inputUrl}/>
                    </div>
                    <button className='btn' type='submit' onClick={()=>alerta()}>Create 😊</button>
                </div>
            </form>

        </div>
    )
    
}

export default NewAuthor