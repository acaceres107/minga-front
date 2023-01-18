import React, {useRef} from 'react'
import axios from 'axios'
import './style/AgregarAutor.css';
import person from '../assets/img/Rectanglea.jpg'
import swal from 'sweetalert'


function AgregarAutor() {
    const inputName = useRef("");
    const inputLastName = useRef("");
    const inputCityCountry = useRef("");
    const inputDate = useRef("");
    const inputUrl = useRef("");
    

    let guardarData = (e) => {
        e.preventDefault()
        let data = {
            name: inputName.current.value,
            last_name: inputLastName.current.value,
            city: inputCityCountry.current.value,
            country: inputCityCountry.current.value,
            date: inputDate.current.value,
            photo: inputUrl.current.value,
            user_id: "63acd1e28e7c0313cba77725"
        }
         axios.post("http://localhost:8000/api/authors/",data)
         .then(e=>console.log(e))
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
                    <img className='img1' src={person}/>
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

export default AgregarAutor